import styled from 'styled-components';
import { theme } from '../../styles/theme.js';

const {
  colorText,
  colorTitles,
  colorRed,
  colorWhite,
  colorBorder,
  fontPrimary,
  fontSecondary,
} = theme.helpers;

export const OrderSummaryContainer = styled.aside`
  min-width: 360px;
`;

export const OrderSummaryWrapper = styled.div`
  border: 1px solid ${colorBorder};
  padding: 40px;
  display: flex;
  flex-direction: column;
  max-width: 360px;
  width: 100%;
  gap: 20px;
`;

export const Title = styled.h2`
  font-family: ${fontSecondary};
  font-weight: 400;
  font-size: 32px;
  line-height: 1.2;
  color: ${colorTitles};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  border-bottom: 1px solid ${colorBorder};
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  max-width: 280px;
  width: 100%;

  &:nth-last-child(2) {
    border-bottom: 2px solid ${colorTitles};
  }
`;

export const TotalItem = styled(Item)`
  border-bottom: none;
  padding-bottom: 0;
`;

export const Label = styled.span`
  font-family: ${fontPrimary};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: ${colorText};
`;

export const TotalLabel = styled(Label)`
  font-size: 20px;
  color: ${colorTitles};
`;

export const Value = styled.span`
  font-family: ${fontSecondary};
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: ${colorText};
`;

export const ValueText = styled(Value)`
  line-height: 1.7;
`;

export const TotalValue = styled(Value)`
  font-size: 25px;
  text-align: right;
  color: ${colorTitles};
`;

export const Meta = styled.span`
  font-family: ${fontPrimary};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.7;
  color: ${colorText};
`;

export const CheckoutButton = styled.button`
  font-family: ${fontPrimary};
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: ${colorWhite};
  background-color: ${colorTitles};
  border: none;
  width: 100%;
  height: 50px;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 2px;
    height: 100%;
    position: absolute;
    right: 2px;
    top: 0;
    background-color: ${colorWhite};
  }

  &:hover {
    background-color: ${colorRed};
  }
`;
