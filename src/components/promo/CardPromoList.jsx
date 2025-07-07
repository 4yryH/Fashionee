import React from 'react';
import { CardPromo } from './CardPromo.jsx';

// рендер списка для промо-карточек
export function CardPromoList({ items = [] }) {
  const startIndex = 0;
  const endIndex = 3;

  const itemsCurrent = items.slice(startIndex, endIndex);

  return itemsCurrent.map((item) => (
    <li key={item.id} className="promo__item">
      <CardPromo
        articleProps={item.articleProps}
        imgProps={{
          src: item.image,
          alt: item.name,
        }}
        divWrapperProps={item.divWrapperProps}
        titleProps={{
          content: item.name,
        }}
        divWrapperPriceProps={item.divWrapperPriceProps}
        priceProps={{
          price: item.price,
        }}
        priceOldProps={{
          oldPrice: item.oldPrice,
        }}
      />
    </li>
  ));
}
