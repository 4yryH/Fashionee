import styled from 'styled-components';
import { theme } from '../../styles/theme.js';

const { colorText, colorTitles, colorBgImages, fontPrimary, fontSecondary } =
  theme.helpers;

export const CardContainer = styled.article`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const Image = styled.img`
  width: 75px;
  height: 85px;
  background-color: ${colorBgImages};
  object-fit: cover;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.h3`
  font-family: ${fontPrimary};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: ${colorText};
`;

export const Prices = styled.div`
  display: flex;
  gap: 10px;
`;

export const PriceCurrent = styled.span`
  font-family: ${fontSecondary};
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  text-transform: capitalize;
  color: ${colorTitles};
`;

export const PriceOld = styled.span`
  font-family: ${fontSecondary};
  font-weight: 300;
  font-size: 12px;
  line-height: 1;
  text-decoration: line-through;
  color: ${colorText};
`;
