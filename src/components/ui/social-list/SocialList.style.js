import styled from 'styled-components';
import { theme } from '../../../styles/theme.js';

const { colorText, colorRed, fontPrimary } = theme.helpers;

export const StyledSocialList = styled.ul`
  display: flex;
  gap: 40px;
`;

export const SocialItem = styled.li`
  position: relative;

  &::before {
    content: '';
    width: 10px;
    height: 0;
    position: absolute;
    top: 50%;
    left: -26px;
    border: 1px solid ${colorText};
  }

  &:first-child::before {
    display: none;
  }
`;

export const SocialLink = styled.a`
  font-family: ${fontPrimary};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${colorText};

  &:hover {
    color: ${colorRed};
  }
`;
