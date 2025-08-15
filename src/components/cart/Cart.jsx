import React from 'react';
import {
  CartMenuItem,
  CartButton,
  StyledCartIcon,
  CounterBadge,
} from './Cart.styles';

export function Cart({ count = 0, onClick = () => {} }) {
  return (
    <CartMenuItem>
      <CartButton data-testid="cart-counter-btn" onClick={onClick}>
        <StyledCartIcon />
        <CounterBadge data-testid="cart-counter">{count || '0'}</CounterBadge>
      </CartButton>
    </CartMenuItem>
  );
}
