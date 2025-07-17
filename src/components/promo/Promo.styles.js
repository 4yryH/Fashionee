import styled from 'styled-components';
import { theme } from '../../styles/theme.js';

const { colorTitles, fontSecondary } = theme.helpers;

export const PromoContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const PromoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-family: ${fontSecondary};
  color: ${colorTitles};
  line-height: 1.2;
  font-weight: 400;
  border-bottom: 2px solid ${colorTitles};
  padding-bottom: 14px;
`;
