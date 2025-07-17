import React from 'react';
import {
  CardContainer,
  CardWrapper,
  Image,
  PriceCurrent,
  PriceOld,
  Prices,
  Title,
} from './CardPromo.styles.js';

// карточка товара для промо
export function CardPromo({
  srcImage = '',
  altImage = '',
  title = '',
  priceCurrent,
  priceOld,
}) {
  return (
    <CardContainer>
      <Image src={srcImage || null} alt={altImage || ''} />
      <CardWrapper>
        <Title>{title}</Title>
        <Prices>
          <PriceCurrent>{`$${priceCurrent}`}</PriceCurrent>
          {/*Проверка приходит ли старая цена, если нет, то и не рендерим этот элемент*/}
          {priceOld != null && priceOld !== '' && (
            <PriceOld>{`$${priceOld}`}</PriceOld>
          )}
        </Prices>
      </CardWrapper>
    </CardContainer>
  );
}
