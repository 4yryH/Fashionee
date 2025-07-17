import styled from 'styled-components';
import CartIcon from '../../assets/icons/cart.svg?react';
import { theme } from '../../styles/theme.js';

const { colorTitles, colorRed, colorWhite, fontPrimary } = theme.helpers;

export const StyledCartIcon = styled(CartIcon)`
  width: 20px;
  height: 20px;
`;

export const CounterBadge = styled.span`
  font-family: ${fontPrimary};
  font-size: 14px;
  font-weight: 700;
  color: ${colorWhite};
  text-align: center;
  background-color: ${colorTitles};
  border-radius: 50%;
  padding: 2px 5px;
  line-height: 1;
  width: 19px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartMenuItem = styled.li`
  list-style: none;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  gap: 4px;

  &:hover ${CounterBadge} {
    background-color: ${colorRed};
    color: ${colorTitles};
  }

  &:hover ${StyledCartIcon} path {
    fill: ${colorRed};
  }
`;
