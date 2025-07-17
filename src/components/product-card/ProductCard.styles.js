import styled from 'styled-components';
import FavoriteIcon from '../../assets/icons/favorite.svg?react';
import { theme } from '../../styles/theme.js';

const {
  colorText,
  colorTitles,
  colorRed,
  colorGray,
  colorWhite,
  colorBgImages,
  colorBgQuantity,
  fontPrimary,
  fontSecondary,
} = theme.helpers;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 262px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 262px;
`;

export const ProductImage = styled.img`
  width: 262px;
  height: 360px;
  object-fit: cover;
  background-color: ${colorBgImages};
`;

export const Badge = styled.span`
  position: absolute;
  top: 17px;
  left: 20px;
  display: ${(props) => (props.type ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 20px;
  font-family: ${fontPrimary};
  font-weight: 800;
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  color: ${colorWhite};
  background-color: ${(props) =>
    props.type === 'sale'
      ? props.theme.colors.red
      : props.type === 'new'
        ? props.theme.colors.green
        : 'transparent'};
`;

export const FavoriteButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isFavorite',
})`
  position: absolute;
  top: 17px;
  right: 20px;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover svg path,
  &.active svg path {
    fill: ${colorRed};
  }
`;

export const StyledFavoriteIcon = styled(FavoriteIcon).withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})`
  width: 19px;
  height: 17px;
  path {
    fill: ${(props) => (props.active ? props.theme.colors.red : undefined)};
  }
`;

export const Caption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h3`
  font-family: ${fontPrimary};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: ${colorText};
  margin: 0;
`;

export const Prices = styled.div`
  display: flex;
  gap: 16px;
`;

export const PriceOld = styled.span`
  font-family: ${fontSecondary};
  font-weight: 300;
  font-size: 16px;
  line-height: 1;
  text-decoration: line-through;
  color: ${colorText};
`;

export const PriceCurrent = styled.span`
  font-family: ${fontSecondary};
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: ${colorTitles};
`;

export const BuyMenuWrapper = styled.div``;

export const QuantityWrapper = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: ${colorBgQuantity};
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  font-family: ${fontSecondary};
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  color: ${colorGray};
  background: ${colorBgQuantity};
  border: none;
  cursor: pointer;
  width: 33%;

  &:hover {
    color: ${colorRed};
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export const QuantityInput = styled.span`
  font-family: ${fontPrimary};
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: ${colorTitles};
  background: ${colorBgQuantity};
  border: none;
  width: 33%;
  text-align: center;
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${colorBgQuantity};
  font-family: ${fontSecondary};
  font-weight: 500;
  font-size: 16px;
  border: 1px solid ${colorGray};
  cursor: pointer;

  &:hover {
    color: ${colorRed};
  }
`;
