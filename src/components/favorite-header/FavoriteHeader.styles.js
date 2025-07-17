import styled from 'styled-components';
import FavoriteIcon from '../../assets/icons/favorite.svg?react';
import { theme } from '../../styles/theme.js';

const { colorTitles, colorRed, colorWhite, fontPrimary } = theme.helpers;

export const FavoriteMenuItem = styled.li`
  list-style: none;
`;

export const StyledFavoriteIcon = styled(FavoriteIcon)`
  width: 19px;
  height: 18px;
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
`;

export const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  gap: 4px;

  /* Hover для бейджа и иконки */
  &:hover ${CounterBadge} {
    background-color: ${colorRed};
    color: ${colorTitles};
  }
  &:hover ${StyledFavoriteIcon} path {
    fill: ${colorRed};
  }
`;

export const FilterDecorWrapper = styled.div``;

export const FilterSummary = styled.summary`
  display: flex;
  gap: 14px;
  font-family: ${fontPrimary};
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  text-transform: capitalize;
  color: ${colorRed};
  cursor: pointer;
`;

export const FilterDetails = styled.details`
  position: relative;
`;
