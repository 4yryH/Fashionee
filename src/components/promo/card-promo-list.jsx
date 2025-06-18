import React from "react";
import { CardPromo } from "./card-promo.jsx";

// рендер списка для промо-карточек
export function CardPromoList({ items = [] }) {
  return items.map(item => (
    <li key={item.id} className="promo__item">
      <CardPromo
        articleProps={item.articleProps}
        imgProps={item.imgProps}
        divWrapperProps={item.divWrapperProps}
        titleProps={item.titleProps}
        divWrapperPriceProps={item.divWrapperPriceProps}
        priceProps={item.priceProps}
        priceOldProps={item.priceOldProps}
      />
    </li>
  ));
}
