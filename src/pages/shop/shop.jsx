import React, { useState, useEffect } from 'react';
import { Filter } from '../../components/filter/filter.jsx';
import { Promo } from '../../components/promo/promo.jsx';
import { SaleBanner } from '../../components/sale-banner/sale-banner.jsx';
import { SortSelect } from '../../components/ui/sort-select/sort-select.jsx';
import { ProductCard } from '../../components/product-card/product-card.jsx';
import { Pagination } from '../../components/pagination/pagination.jsx';
import { filterProducts } from '../../utils/filterProducts.js';
import './shop.css';

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

  // для фильтра
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    price: [0, 100],
    colors: [],
  });

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const result = filterProducts(products, filters);
    setFilteredProducts(result);
    setCurrentPage(1); // сброс страницы при новом фильтре
  }, [filters, products]);

  // всего страниц с товарами
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  // индексы для обрезки массива карточек
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  // обрезка массива товаров
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  // мин и макс для слайдера цена
  const prices = products.map((p) => Number(p.price)).filter((p) => !isNaN(p));
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
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
        />
        <Promo products={products} />
        <SaleBanner />
      </div>
      <div className="content-main__products">
        <div className="content-main__header">
          <p className="products-count">
            There are{' '}
            <span className="products-count__number">{filteredProducts.length}</span>{' '}
            products in this category
          </p>
          <div className="sort">
            <SortSelect />
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
          products={products}
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
