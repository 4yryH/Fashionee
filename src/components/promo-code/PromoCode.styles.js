import styled from 'styled-components';
import ButtonIcon from '../../assets/icons/button-decor-arrow.svg?react';
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

export const PromoCodeContainer = styled.div`
  max-width: 375px;
  width: 100%;
  min-height: 303px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const DescriptionWrapper = styled.div`
  gap: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-family: ${fontSecondary};
  color: ${colorTitles};
  line-height: 1.2;
  font-weight: 400;
`;

export const Description = styled.p`
  font-family: ${fontPrimary};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.7;
  color: ${colorText};
  max-width: 300px;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  gap: 30px;
  padding-right: 41px;
`;

export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Input = styled.input`
  font-family: ${fontPrimary};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.7;
  color: ${colorTitles};
  border: none;
  height: 50px;
  flex-grow: 1;
  border-bottom: 2px solid ${colorBorder};

  &:hover {
    background-color: ${colorBorder};
  }
`;

export const Button = styled.button`
  background-color: ${colorTitles};
  border: none;
  width: 54px;
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

export const StyledButtonIcon = styled(ButtonIcon)`
  height: 12px;
  width: 21px;
`;

export const SocialContainer = styled.section``;

export const Subtitle = styled.h2`
  font-size: 16px;
  font-family: ${fontPrimary};
  color: ${colorTitles};
  line-height: 1.2;
  font-weight: 500;
`;
