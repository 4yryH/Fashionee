import React from 'react';
import { CardPromoList } from './CardPromoList.jsx';
import { PromoContainer, PromoList, Title } from './Promo.styles.js';

// блок с промо-карточками товаров
export function Promo({ products = [] }) {
  return (
    <>
      <PromoContainer>
        <Title>Reviewed By You</Title>
        <PromoList>
          {/*зашит метод map для перебора списка и его рендера*/}
          <CardPromoList items={products} />
        </PromoList>
      </PromoContainer>
    </>
  );
}
