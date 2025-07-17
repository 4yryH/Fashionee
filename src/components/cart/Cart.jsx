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
      <CartButton onClick={onClick}>
        <StyledCartIcon />
        <CounterBadge>{count || '0'}</CounterBadge>
      </CartButton>
    </CartMenuItem>
  );
}
