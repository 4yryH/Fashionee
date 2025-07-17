import styled from 'styled-components';
import Select from 'react-select';
import { theme } from '../../styles/theme.js';

const { colorText, colorTitles, colorRed, colorWhite, fontPrimary } =
  theme.helpers;

export const StyledSortSelect = styled(Select).attrs({
  classNamePrefix: 'sort-select',
})`
  & .sort-select__control {
    border: none;
    box-shadow: none;
    cursor: pointer;
    display: flex;
    min-width: 262px;
  }

  & .sort-select__value-container {
    display: flex;
  }

  & .sort-select__single-value {
    font-family: ${fontPrimary};
    color: ${colorTitles};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.7;
  }

  & .sort-select__dropdown-indicator {
    transition: transform 0.2s;
  }

  & .sort-select__control--menu-is-open .sort-select__dropdown-indicator {
    transform: rotate(180deg);
  }

  //выпадающий список
  & .sort-select__menu {
    background-color: ${colorWhite};
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    position: absolute;
    z-index: 2;
    min-width: 262px;
    width: 100%;
    margin-top: 4px;
    border: none;
  }

  & .sort-select__option {
    font-family: ${fontPrimary};
    color: ${colorText};
    font-size: 14px;
    line-height: 1.7;
    padding: 5px 20px;
  }

  & .sort-select__option--is-selected {
    color: ${colorText};
    background-color: ${colorRed};
  }

  & .sort-select__option--is-focused {
    background-color: ${colorRed};
    color: ${colorWhite};
  }

  & .sort:hover .sort-select__single-value,
  & .sort:hover .sort-select__custom-indicator {
    color: ${colorRed};
    fill: ${colorRed};
  }
`;
