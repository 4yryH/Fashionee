import React from 'react';
import { CardPromo } from './CardPromo.jsx';

// рендер списка для промо-карточек
export function CardPromoList({ items = [] }) {
  const startIndex = 0;
  const endIndex = 3;

  const itemsCurrent = items.slice(startIndex, endIndex);

  return itemsCurrent.map((item) => (
    <li key={item.id}>
      <CardPromo
        srcImage={item.image}
        altImage={item.name}
        title={item.name}
        priceCurrent={item.price}
        priceOld={item.oldPrice}
      />
    </li>
  ));
}
