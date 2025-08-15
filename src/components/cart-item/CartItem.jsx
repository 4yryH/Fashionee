import React from 'react';
import {
  CartItemContainer,
  ItemImage,
  Info,
  Title,
  Details,
  PriceBox,
  QuantityWrapper,
  QuantityButton,
  QuantityInput,
  Total,
  RemoveButton,
  RemoveIcon,
  OldPrice,
  CurrentPrice,
  Wrapper,
} from './CartItem.styles.js';

export function CartItem({ item, onQuantityChange, onRemove = () => {} }) {
  return (
    <CartItemContainer>
      <ItemImage src={item.image} alt={item.name} />
      <Info>
        <Title>{item.name}</Title>
        <Details>
          <PriceBox>
            {/*старая цена рендерится, только если есть*/}
            {item.oldPrice && <OldPrice>${item.oldPrice}</OldPrice>}
            <CurrentPrice data-testid={`cart-item-price`}>${item.price}</CurrentPrice>
          </PriceBox>
          <Wrapper>
            <QuantityWrapper>
              <QuantityButton
                data-testid={`cart-item-qty-minus`}
                onClick={() => onQuantityChange(item.id, item.quantity - 1)}
              >
                -
              </QuantityButton>
              <QuantityInput data-testid={`cart-item-qty`}>{item.quantity}</QuantityInput>
              <QuantityButton
                data-testid={`cart-item-qty-plus`}
                onClick={() => onQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </QuantityButton>
            </QuantityWrapper>
            <Total>${(item.price * item.quantity).toFixed(2)}</Total>
          </Wrapper>
        </Details>
      </Info>
      <RemoveButton onClick={() => onRemove(item.id)}>
        <RemoveIcon>X</RemoveIcon>
      </RemoveButton>
    </CartItemContainer>
  );
}
