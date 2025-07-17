import styled from 'styled-components';
import { theme } from '../../styles/theme.js';

const { colorTitles, colorRed, fontPrimary } = theme.helpers;

export const BreadcrumbsList = styled.ul`
  display: flex;
  gap: 12px;

  &::before {
    content: '';
    display: block;
    height: 100%;
    border-left: 2px solid ${colorTitles};
  }
`;

export const BreadcrumbItem = styled.li``;

export const BreadcrumbCurrent = styled.span`
  font-family: ${fontPrimary};
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: ${colorRed};
  background-color: transparent;
  border: none;
`;

export const BreadcrumbButton = styled.button`
  font-family: ${fontPrimary};
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: ${colorTitles};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${colorRed};
  }
`;
