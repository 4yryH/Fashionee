import React, { useEffect, useState } from 'react';
import {
  Card,
  ImageWrapper,
  ProductImage,
  Badge,
  FavoriteButton,
  StyledFavoriteIcon,
  Caption,
  Title,
  Prices,
  PriceOld,
  PriceCurrent,
  QuantityWrapper,
  QuantityButton,
  QuantityInput,
  BuyButton,
  BuyMenuWrapper,
} from './ProductCard.styles.js';

export function ProductCard({
  srcImage,
  altImage,
  badge,
  title,
  priceProps = {},
  priceOldProps = {},
  //работа с избранным
  isFavorite = false,
  onToggleFavorite,
  // работа с добавлением в корзину
  initialQuantity = 0,
  onAddToCart,
  onQuantityChange,
}) {
  //состояние для избранного
  const [fav, setFav] = useState(isFavorite);

  useEffect(() => {
    setFav(isFavorite);
  }, [isFavorite]);

  function handleFavClick() {
    // сначала сразу меняем визуал
    setFav((v) => !v);
    // а потом прокидываем обновление в App
    onToggleFavorite();
  }

  // состояние для счетчика
  const [count, setCount] = useState(initialQuantity);

  // синхрон initialQuantity
  useEffect(() => {
    setCount(initialQuantity);
  }, [initialQuantity]);

  // клик на buy
  function handleBuy() {
    onAddToCart();
    onQuantityChange(1);
    setCount(1);
  }

  // счетчик +1
  function increase() {
    const nextState = count + 1;
    setCount(nextState);
    onQuantityChange(nextState);
  }

  // счетчик -1
  function decrease() {
    const nextState = count - 1;
    setCount(nextState);
    onQuantityChange(nextState);
  }

  return (
    <Card>
      <ImageWrapper>
        <ProductImage src={srcImage || null} alt={altImage || ''} />
        <Badge type={badge || undefined}>{badge}</Badge>
        <FavoriteButton type="button" isFavorite={fav} onClick={handleFavClick}>
          <StyledFavoriteIcon active={isFavorite} />
        </FavoriteButton>
      </ImageWrapper>
      <Caption>
        <Title>{title || 'Title Product'}</Title>
        <Prices>
          <PriceCurrent>
            {priceProps.price != null && priceProps.price !== ''
              ? `$${priceProps.price}`
              : 'Price'}
          </PriceCurrent>
          {priceOldProps.oldPrice != null && priceOldProps.oldPrice !== '' && (
            <PriceOld>{`$${priceOldProps.oldPrice}`}</PriceOld>
          )}
        </Prices>
        <BuyMenuWrapper>
          {count === 0 ? (
            <BuyButton type="button" onClick={handleBuy}>
              Buy
            </BuyButton>
          ) : (
            <QuantityWrapper>
              <QuantityButton onClick={decrease} disabled={count === 0}>
                -
              </QuantityButton>
              <QuantityInput>{count}</QuantityInput>
              <QuantityButton onClick={increase}>+</QuantityButton>
            </QuantityWrapper>
          )}
        </BuyMenuWrapper>
      </Caption>
    </Card>
  );
}
