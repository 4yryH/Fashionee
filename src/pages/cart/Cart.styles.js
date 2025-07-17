import styled from 'styled-components';
import { theme } from '../../styles/theme.js';

const { colorText, colorTitles, fontPrimary, fontSecondary } = theme.helpers;

export const ContentMain = styled.section`
  display: flex;
  gap: 60px;
  justify-content: center;
  margin-top: 199px;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-bottom: 10px;
`;

export const CartEmpty = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 720px;
`;

export const ContentFooterCart = styled.section`
  margin: 70px auto 0 auto;
  max-width: 1140px;
  width: 100%;
`;

export const TitleCartEmpty = styled.h2`
  font-size: 40px;
  font-family: ${fontSecondary};
  color: ${colorTitles};
  line-height: 1.2;
  font-weight: 400;
`;

export const DescriptionCartEmpty = styled.p`
  font-size: 20px;
  font-family: ${fontPrimary};
  color: ${colorText};
  line-height: 1.7;
`;
