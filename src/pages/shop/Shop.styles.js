import styled from 'styled-components';
import { theme } from '../../styles/theme.js';

const { colorText, colorTitles, fontPrimary } = theme.helpers;

export const ContentMain = styled.section`
  margin-top: 199px;
  display: flex;
  justify-content: center;
  gap: 51px;
`;

export const WrapperLeft = styled.div`
  max-width: 244px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ProductsWrapper = styled.div`
  max-width: 846px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 43px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductsCount = styled.p`
  font-family: ${fontPrimary};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: ${colorText};
`;

export const ProductsCountNumber = styled.span`
  font-weight: 600;
  color: ${colorTitles};
`;

export const BodyGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 846px;
  width: 100%;
  gap: 50px 30px;
`;

export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
`;
