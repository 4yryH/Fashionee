import React from 'react';
import { Title } from '../ui/title/Title.jsx';
import { CardPromoList } from './CardPromoList.jsx';
import './Promo.css';

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
