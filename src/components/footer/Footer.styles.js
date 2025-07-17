import styled from 'styled-components';
import PatternMiddle from '../../assets/images/patternMiddle.svg?url';
import PatternSmall from '../../assets/images/patternSmall.svg?url';
import { theme } from '../../styles/theme.js';

const {
  colorText,
  colorTitles,
  colorRed,
  colorBorder,
  fontPrimary,
  fontSecondary,
} = theme.helpers;

export const FooterContainer = styled.footer`
  border-top: 20px solid ${colorBorder};
  background-image: url(${PatternMiddle}), url(${PatternSmall});
  background-repeat: no-repeat;
  background-position:
    right center,
    30px 30px;
  margin-top: 120px;
`;

export const FooterWrapper = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 130px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 327px;
  width: 100%;
  gap: 35px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-family: ${fontPrimary};
  color: ${colorText};
  line-height: 1.7;
`;

export const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid ${colorBorder};
  padding-bottom: 25px;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleSocial = styled.h2`
  font-family: ${fontPrimary};
  font-size: 16px;
  font-weight: 500;
  color: ${colorTitles};
`;

export const Title = styled.h2`
  font-family: ${fontSecondary};
  font-size: 20px;
  font-weight: 400;
  color: ${colorTitles};
  line-height: 1.2;
`;

export const TitleHidden = styled.h2`
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

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  max-width: max-content;
  gap: 20px;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const MenuItem = styled.li``;

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 361px;
  width: 100%;
  gap: 20px;
`;

export const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const Bottom = styled.div`
  border-top: 1px solid ${colorBorder};
  max-width: 1140px;
  width: 100%;
  margin: 88px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 23px 0;
`;

export const PaymentsContainer = styled.div`
  display: flex;
  gap: 13px;
`;

export const PaymentsList = styled.ul`
  display: flex;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const PaymentsItem = styled.li``;

export const PaymentsLink = styled.a``;

export const PaymentsLogo = styled.img`
  width: 33px;
  height: 20px;
`;

export const MenuLink = styled.button`
  font-family: ${fontPrimary};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.7;
  color: ${colorText};
  position: relative;
  padding-left: 14px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${colorRed};
  }

  &::before {
    content: '';
    width: 3px;
    height: 3px;
    background-color: ${colorText};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &:hover::before {
    background-color: ${colorRed};
  }
`;

export const CopyrightContainer = styled.div``;
