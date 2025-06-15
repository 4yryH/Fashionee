import React from "react";
import { PromoCard } from "../promo-card/promo-card.jsx";

export function PromoCardList({ items = [] }) {
  return items.map(item => (
    <li key={item.id} className="promo__item">
      <PromoCard
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
