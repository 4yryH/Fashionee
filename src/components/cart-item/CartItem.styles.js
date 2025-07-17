import styled from 'styled-components';
import { theme } from '../../styles/theme.js';

const {
  colorText,
  colorTitles,
  colorRed,
  colorGray,
  colorBorder,
  colorBgImages,
  colorBgQuantity,
  fontPrimary,
  fontSecondary,
} = theme.helpers;

export const CartItemContainer = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
  min-width: 720px;
  min-height: 170px;
  border-bottom: 1px solid ${colorBorder};

  &:last-child::after {
    content: '';
    position: absolute;
    bottom: -1px;
    width: 100%;
    border-bottom: 2px solid ${colorTitles};
  }
`;

export const ItemImage = styled.img`
  background-color: ${colorBgImages};
  object-fit: contain;
  width: 130px;
  height: 140px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  width: 100%;
`;

export const Title = styled.h3`
  font-family: ${fontSecondary};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: ${colorTitles};
  margin: 0;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PriceBox = styled.div`
  display: flex;
  gap: 10px;
  min-width: 150px;
`;

export const OldPrice = styled.div`
  font-family: ${fontSecondary};
  font-weight: 300;
  font-size: 16px;
  line-height: 1;
  text-decoration: line-through;
  color: ${colorText};
`;

export const CurrentPrice = styled.div`
  font-family: ${fontSecondary};
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: ${colorTitles};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuantityWrapper = styled.div`
  max-width: 109px;
  width: 100%;
  min-height: 50px;
  background-color: ${colorBgQuantity};
  display: flex;
`;

export const QuantityButton = styled.button`
  flex: 1;
  font-family: ${fontSecondary};
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: ${colorGray};
  background-color: ${colorBgQuantity};
  border: none;
  cursor: pointer;

  &:hover {
    color: ${colorRed};
  }
`;

export const QuantityInput = styled.div`
  flex: 1;
  font-family: ${fontPrimary};
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: ${colorTitles};
  background-color: ${colorBgQuantity};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Total = styled.span`
  font-family: ${fontSecondary};
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: ${colorTitles};
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid ${colorText};
  opacity: 0.1;
  width: 25px;
  height: 25px;
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${colorRed};
    opacity: 1;
    border: none;
  }
`;

export const RemoveIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fontPrimary};
  font-weight: 600;
  font-size: 10px;
  line-height: 1;
`;
