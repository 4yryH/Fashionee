import styled from 'styled-components';
import ArrowIcon from '../../assets/icons/page-next-prev.svg?react';
import { theme } from '../../styles/theme.js';

const { colorTitles, colorRed, fontPrimary } = theme.helpers;

export const PaginationContainer = styled.nav`
  display: flex;
  gap: 30px;
  align-self: center;
  min-height: 60px;
`;

export const PaginationList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const PaginationButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;

  &:hover path {
    fill: ${colorRed};
  }

  &:disabled {
    cursor: default;

    &:hover path {
      fill: ${colorTitles};
    }
  }
`;

export const PrevIcon = styled(ArrowIcon)`
  width: 51px;
  height: 12px;
`;

export const NextIcon = styled(ArrowIcon)`
  width: 51px;
  height: 12px;
  transform: rotate(180deg);
`;

export const PaginationLink = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isCurrent',
})`
  font-family: ${fontPrimary};
  font-weight: ${(props) => (props.isCurrent ? 600 : 400)};
  font-size: 16px;
  line-height: 1;
  color: ${colorTitles};
  opacity: ${(props) => (props.isCurrent ? 1 : 0.3)};
  background: transparent;
  border: none;
  cursor: pointer;
  transform: translateY(-5%);

  &::after {
    content: '';
    display: block;
    position: relative;
    width: ${(props) => (props.isCurrent ? '22px' : '10px')};
    height: 3px;
    border-radius: 10px;
    background-color: ${colorTitles};
    top: 2px;
  }

  &:hover {
    color: ${colorRed};
    font-weight: 600;
    opacity: 1;

    &::after {
      opacity: 1;
      background-color: ${colorRed};
    }
  }
`;
