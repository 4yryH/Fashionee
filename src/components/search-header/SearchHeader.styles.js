import styled from 'styled-components';
import SearchIcon from '../../assets/icons/search.svg?react';
import { theme } from '../../styles/theme.js';

const { colorRed } = theme.helpers;

export const SearchListItem = styled.li``;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 18px;
  height: 18px;
`;

export const Button = styled.button`
  display: flex;
  gap: 4px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover ${StyledSearchIcon} path {
    fill: ${colorRed};
  }
`;
