import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../../styles/theme.js';

const { colorText, colorRed, fontSecondary } = theme.helpers;

// Глобальные правки для rc-tooltip
export const PriceSliderGlobalStyles = createGlobalStyle`
  .rc-tooltip-inner {
    color: ${colorText};
    font-family: ${fontSecondary};
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 1;
    background-color: transparent;
    box-shadow: none;
    min-height: 24px;
    padding: 10px 10px 0 10px
  }

  .rc-tooltip-arrow {
    display: none;
  }
`;

// Обёртка всего слайдера
export const SliderContainer = styled.div`
  width: 100%;
  margin: 57px 0 0 0;
`;

// Трек, на который накладывается фон из getTrackBackground
export const Track = styled.div`
  height: 2px;
  display: flex;
  position: relative;
  margin: 0;
`;

// Ручка (thumb)
export const Thumb = styled.div`
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  position: absolute;
  background-color: ${colorRed};

  &:active {
    cursor: grabbing;
  }
`;
