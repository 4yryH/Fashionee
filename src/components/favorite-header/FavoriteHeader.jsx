import React from 'react';
import {
  FavoriteMenuItem,
  FavoriteButton,
  StyledFavoriteIcon,
  CounterBadge,
} from './FavoriteHeader.styles.js';

export function FavoriteHeader({
  count = 0, // прокидывается из App.jsx
  onClick,
}) {
  return (
    <FavoriteMenuItem>
      <FavoriteButton type="button" aria-label="My favorites" onClick={onClick}>
        <StyledFavoriteIcon />
        <CounterBadge>{count}</CounterBadge>
      </FavoriteButton>
    </FavoriteMenuItem>
  );
}
