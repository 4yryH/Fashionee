import React from 'react';
import { Title } from '../ui/title/title.jsx';
import { CardPromoList } from './card-promo-list.jsx';
import './promo.css';

// блок с промо-карточками товаров
export function Promo({ products = [] }) {
  return (
    <>
      <aside className="promo">
        <Title content="Reviewed By You" fontSize="24px" />
        <ul className="promo__list">
          {/*зашит метод map для перебора списка и его рендера*/}
          <CardPromoList items={products} />
        </ul>
      </aside>
    </>
  );
}
