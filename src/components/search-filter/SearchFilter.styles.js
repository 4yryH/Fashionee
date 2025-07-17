import styled from 'styled-components';
import SearchIcon from '../../assets/icons/search.svg?react';
import { theme } from '../../styles/theme.js';

const { colorRed, colorBorder } = theme.helpers;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Legend = styled.legend`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 10px;
  top: 50%;
  translate: 0 -50%;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${colorBorder};
  width: 100%;
  height: 40px;
  padding: 10px 5px 10px 0;

  &:hover {
    background-color: ${colorBorder};
  }

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
export const SearchWrapper = styled.div`
  position: relative;

  &:hover ${StyledSearchIcon} path {
    fill: ${colorRed};
  }

  &:focus-within ${StyledSearchIcon} {
    display: none;
  }
`;
