import React from "react";
import {CardPromo} from "./card-promo.jsx";

// рендер списка для промо-карточек
export function CardPromoList({items = []}) {
  return items.map(item => (
    <li key={item.id} className="promo__item">
      <CardPromo
        articleProps={item.articleProps}

        imgProps={{
          src: item.image.src,
          alt: item.title
        }}

        divWrapperProps={item.divWrapperProps}

        titleProps={{
          content: item.title
        }}

        divWrapperPriceProps={item.divWrapperPriceProps}

        priceProps={{
          price: item.price}}

        priceOldProps={{
          oldPrice: item.priceOld}}
      />
    </li>
  ));
}
