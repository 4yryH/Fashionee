import React, { useState, useEffect, useMemo } from 'react';
import { Filter } from '../../components/filter/Filter.jsx';
import { Promo } from '../../components/promo/Promo.jsx';
import { SaleBanner } from '../../components/sale-banner/SaleBanner.jsx';
import { SortSelect } from '../../components/ui/sort-select/SortSelect.jsx';
import { ProductCard } from '../../components/product-card/ProductCard.jsx';
import { Pagination } from '../../components/pagination/Pagination.jsx';
import { filterProducts } from '../../utils/FilterProducts.js';
import { useDebounce } from '../../hooks/useDebounce.jsx';
import { sortOptions } from '../../data/SortSelectData.jsx';
import './Shop.css';

const PRODUCTS_PER_PAGE = 12;

export function ShopPage({
  products,
  favoriteIds,
  onToggleFavorite,
  cartItems,
  onAddToCart,
  onQuantityChange,
}) {
  // для пагинации и обрезки массива товаров
  const [currentPage, setCurrentPage] = useState(1);

  // мин и макс для слайдера цена и стартового состояния
  const prices = products.map((p) => Number(p.price)).filter((p) => !isNaN(p));
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // для фильтра и его стартовое состояние
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    price: [minPrice, maxPrice],
    colors: [],
  });

  const debouncedSearch = useDebounce(filters.search, 1000);
  const debouncedFilters = useMemo(
    () => ({
      ...filters,
      search: debouncedSearch,
    }),
    [filters.category, filters.price, filters.colors, debouncedSearch]
  );

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const result = filterProducts(products, debouncedFilters);
    setFilteredProducts(result);
    setCurrentPage(1); // сброс страницы при новом фильтре
  }, [debouncedFilters, products]);

  // сортировка
  const [sortOption, setSortOption] = useState(sortOptions[0].value);

  const sortedProducts = useMemo(() => {
    // копия, чтобы не мутировать оригинал
    const productsCopy = [...filteredProducts];

    // сортировка по умолчанию
    if (sortOption === 'relevance') {
      return filteredProducts;
    }
    // сортировка по цене
    if (sortOption === 'low' || sortOption === 'high') {
      return productsCopy.sort((a, b) =>
        sortOption === 'low' ? a.price - b.price : b.price - a.price
      );
    }
    // к нижнему регистру
    const stringSorted = productsCopy.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    // A → Z или Z → A просто через разворот
    return sortOption === 'fromA' ? stringSorted : stringSorted.reverse();
  }, [filteredProducts, sortOption]);

  // всего страниц с товарами
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  // индексы для обрезки массива карточек
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  // обрезка массива товаров
  const currentProducts = sortedProducts.slice(startIndex, endIndex);
  // выбор страницы при клике
  const changePage = (page) => () => {
    setCurrentPage(page);
  };

  // кнопки пред/след страницы
  const goPrevPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const goNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  return (
    <section className="content-main">
      <div className="main__wrapper-left">
        <Filter
          filters={filters}
          onChange={setFilters}
          priceRange={[minPrice, maxPrice]}
          products={products}
        />
        <Promo products={products} />
        <SaleBanner />
      </div>
      <div className="content-main__products">
        <div className="content-main__header">
          <p className="products-count">
            There are{' '}
            <span className="products-count__number">
              {sortedProducts.length}
            </span>{' '}
            products in this category
          </p>
          <div className="sort">
            <SortSelect
              options={sortOptions}
              value={sortOption}
              onChange={setSortOption}
            />
          </div>
        </div>
        <div className="content-main__body">
          {currentProducts.map((item) => {
            // сколько уже в корзине
            const inCart = cartItems.find((x) => x.id === item.id);
            const qty = inCart ? inCart.quantity : 0;

            return (
              <ProductCard
                key={item.id}
                imgProps={{ src: item.image, alt: item.name }}
                badgeNewProps={{
                  className: item.isNew
                    ? 'product-card__badge product-card__badge--new'
                    : 'hidden-badge',
                  content: 'New',
                }}
                badgeSaleProps={{
                  className: item.isSale
                    ? 'product-card__badge product-card__badge--sale'
                    : 'hidden-badge',
                  content: 'Sale',
                }}
                titleProps={{ content: item.name }}
                priceProps={{ price: item.price }}
                priceOldProps={{ oldPrice: item.oldPrice }}
                isFavorite={favoriteIds.includes(item.id)}
                onToggleFavorite={() => onToggleFavorite(item.id)}
                initialQuantity={qty}
                onAddToCart={() => onAddToCart(item)}
                onQuantityChange={(newQty) => onQuantityChange(item.id, newQty)}
              />
            );
          })}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          changePage={changePage}
          goPrevPage={goPrevPage}
          goNextPage={goNextPage}
        />
      </div>
    </section>
  );
}
