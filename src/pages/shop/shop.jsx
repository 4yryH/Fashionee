import React from "react";
import {Filter} from "../../components/filter/filter.jsx";
import {Promo} from "../../components/promo/promo.jsx";
import {SaleBanner} from "../../components/sale-banner/sale-banner.jsx";
import "./shop.css"
import {SortSelect} from "../../components/ui/sort-select/sort-select.jsx";
import {ProductCard} from "../../components/product-card/product-card.jsx";
import {Pagination} from "../../components/pagination/pagination.jsx";

export function ShopPage({
                           products,
                           favoriteIds,
                           onToggleFavorite,
                           cartItems,
                           onAddToCart,
                           onQuantityChange
                         }) {
  return (
    <section className="content-main">
      <div className="main__wrapper-left">
        <Filter/>
        <Promo/>
        <SaleBanner/>
      </div>
      <div className="content-main__products">
        <div className="content-main__header">
          <p className="products-count">
            There are <span className="products-count__number">
              {products.length}
            </span> products in this category
          </p>
          <div className="sort">
            <SortSelect/>
          </div>
        </div>
        <div className="content-main__body">
          {products.map(item => {
            // сколько уже в корзине
            const inCart = cartItems.find(x => x.id === item.id);
            const qty = inCart ? inCart.quantity : 0;

            return (
              <ProductCard
                key={item.id}
                imgProps={{src: item.image.src, alt: item.title}}
                badgeNewProps={{
                  className: item.new
                    ? "product-card__badge product-card__badge--new"
                    : "hidden-badge",
                  content: "New"
                }}
                badgeSaleProps={{
                  className: item.sale
                    ? "product-card__badge product-card__badge--sale"
                    : "hidden-badge",
                  content: "Sale"
                }}
                titleProps={{content: item.title}}
                priceProps={{price: item.price}}
                priceOldProps={{oldPrice: item.priceOld}}

                isFavorite={favoriteIds.includes(item.id)}
                onToggleFavorite={() => onToggleFavorite(item.id)}

                initialQuantity={qty}
                onAddToCart={() => onAddToCart(item)}
                onQuantityChange={newQty => onQuantityChange(item.id, newQty)}
              />
            );
          })}
        </div>
        <Pagination/>
      </div>
    </section>
  );
}
