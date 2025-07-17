import styled from 'styled-components';
import { theme } from '../../styles/theme.js';

const { colorTitles, colorRed, colorWhite, fontPrimary } = theme.helpers;

export const BannerContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-width: 242px;
  width: 100%;
  min-height: 400px;
  background-color: ${colorTitles};
  outline: 2px solid ${colorWhite};
  outline-offset: -10px;
`;

export const Title = styled.h2`
  font-family: ${fontPrimary};
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: 0.41em;
  text-transform: uppercase;
  color: ${colorWhite};
  text-align: center;
`;

export const Extra = styled.span`
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 0;
  color: ${colorWhite};
`;

export const Description = styled.p`
  font-family: ${fontPrimary};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: ${colorWhite};
  width: fit-content;
`;

export const Button = styled.button`
  font-family: ${fontPrimary};
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: ${colorWhite};
  position: relative;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:hover {
    color: ${colorRed};
  }

  &::before {
    content: '';
    display: block;
    width: 25px;
    height: 2px;
    background-color: ${colorWhite};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -40px;
  }

  &:hover::before {
    background-color: ${colorRed};
  }
`;
