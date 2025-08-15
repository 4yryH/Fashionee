import React from 'react';
import {
  OrderSummaryContainer,
  OrderSummaryWrapper,
  Title,
  List,
  Item,
  TotalItem,
  Label,
  TotalLabel,
  Value,
  ValueText,
  TotalValue,
  Meta,
  CheckoutButton,
} from './Order.styles.js';

// чек с подсчетами в корзине
export function Order({
  liMetaProps = {},
  orderPrice = 0,
  discountPercent = 0,
  deliveryCost = 0,
  cartItems = [],
  promoCode = '',
}) {
  // отдельный подсчет самой суммы скидки для дальнейшего вычета в итоге
  const discountAmount = (orderPrice * discountPercent) / 100;

  const total = orderPrice - discountAmount + deliveryCost; // итоговый чек

  const handleCheckout = () => {
    console.log(
      'Items:',
      cartItems,
      'Promo code:',
      promoCode,
      'Discount percent:',
      discountPercent,
      'Discount amount:',
      discountAmount.toFixed(2),
      'Delivery:',
      deliveryCost,
      'Total amount:',
      total.toFixed(2)
    );
  };
  return (
    <OrderSummaryContainer>
      <OrderSummaryWrapper>
        <Title>Your Order</Title>
        <List>
          <Item>
            <Label>Order price</Label>
            <Value data-testid={'order-price-products'}>{`$${orderPrice.toFixed(2)}`}</Value>
          </Item>
          <Item>
            <Label>Discount for promo code</Label>
            <ValueText>
              {discountPercent > 0 ? `${discountPercent}%` : 'No'}
            </ValueText>
          </Item>
          <Item>
            <Label>Delivery</Label>
            <Meta>{liMetaProps.data}</Meta>
            <Value>{`$${deliveryCost.toFixed(2)}`}</Value>
          </Item>
          <TotalItem>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>{`$${total.toFixed(2)}`}</TotalValue>
          </TotalItem>
        </List>
        <CheckoutButton onClick={handleCheckout}>{'Checkout'}</CheckoutButton>
      </OrderSummaryWrapper>
    </OrderSummaryContainer>
  );
}
