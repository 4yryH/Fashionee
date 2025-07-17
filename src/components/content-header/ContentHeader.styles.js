import styled from 'styled-components';
import pattern from '../../assets/images/pattern.svg';
import { theme } from '../../styles/theme.js';

const { colorTitles, colorBgImages, fontSecondary } = theme.helpers;

export const ContentHeaderContainer = styled.section`
  display: flex;
  justify-content: space-around;
  max-width: 1920px;
  width: 100%;
  margin: 50px auto 0;
  background-image: url(${pattern});
  background-repeat: no-repeat;
  background-position: 59px 30px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1740px;
  width: 100%;
`;

export const WrapperLeft = styled.div`
  display: flex;
  max-width: 850px;
  width: 100%;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 110%;
    height: 2px;
    position: absolute;
    bottom: -25px;
    left: -200px;
    background-color: ${colorTitles};
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  position: relative;
`;

export const Title = styled.h1`
  font-family: ${fontSecondary};
  font-weight: 400;
  font-size: 80px;
  line-height: 1;
  color: ${colorTitles};
`;

export const ContentImage = styled.img`
  width: 800px;
  height: 400px;
  object-fit: contain;
  background-color: ${colorBgImages};
`;
