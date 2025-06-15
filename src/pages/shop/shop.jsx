import React from "react";
import {Filter} from "./filter/filter/filter.jsx";
import {Promo} from "../../components/promo/promo.jsx";
import {SaleBanner} from "../../components/sale-banner/sale-banner.jsx";

import "./shop.css"
import {SortSelect} from "../../components/ui/sort-select/sort-select.jsx";
import products from "../../data/product-card-data.json"
import {ProductCard} from "../../components/card/product-card.jsx";
import {Pagination} from "../../components/pagination/pagination.jsx";

export function ShopPage() {
  return (
    <section className="content-main">
      <div className="main__wrapper-left">
        <Filter/>
        <Promo/>
        <SaleBanner/>
      </div>
      <div className="content-main__products">
        <div className="content-main__header">
          <p className="products-count">There are <span
            className="products-count__number">{products.length}</span> products in this
            category</p>
          <div className="sort">
            <SortSelect/>
          </div>
        </div>
        <div className="content-main__body">
          {/*карточки товаров*/}
          {products.map(item => (
            <ProductCard
              key={item.id}

              imgProps={{
                src: item.image.src,
                alt: item.image.alt,
              }}
              // бейдж новинка
              badgeNewProps={{
                className: item.new
                  ? "product-card__badge product-card__badge--new"
                  : "hidden-badge",
                content: "New"
              }}

              // бейдж скидка
              badgeSaleProps={{
                className: item.sale
                  ? "product-card__badge product-card__badge--sale"
                  : "hidden-badge",
                content: "Sale"
              }}
              // название товара
              titleProps={{
                content: item.title
              }}

              //цена
              priceProps={{
                price: item.price
              }}

              // старая цена
              priceOldProps={{
                oldPrice: item.priceOld
              }}
            />
          ))
          }
        </div>
        <Pagination/>
      </div>
    </section>
  )
}
