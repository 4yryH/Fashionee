import React from 'react';
import { Logo } from '../ui/logo/Logo.jsx';
import { SubscribeForm } from '../ui/subscribe-form/SubscribeForm.jsx';
import { SocialList } from '../ui/social-list/SocialList.jsx';
import socialData from '../../data/SocialData.json';
import { PaymentsListData } from '../../data/PaymentsListData.jsx';
import {
  FooterRoutesLeft,
  FooterRoutesRight,
} from '../../data/FooterMenuData.jsx';
import {
  FooterContainer,
  FooterWrapper,
  Brand,
  BrandWrapper,
  Social,
  Menu,
  MenuList,
  Newsletter,
  NewsletterWrapper,
  Bottom,
  PaymentsList,
  MenuLink,
  MenuItem,
  Description,
  TitleSocial,
  Title,
  TitleHidden,
  CopyrightContainer,
  PaymentsContainer,
  PaymentsItem,
  PaymentsLink,
  PaymentsLogo,
} from './Footer.styles';

// футер для каждой страницы, на кнопки со страницами приходит пропс для onClick,
// для дальнейшего рендера содержимого в app.jsx
// Внешние ссылки социал и поддерживаемых способов оплаты открываются в новой вкладке
export function Footer({ onNavigate }) {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Brand>
          <BrandWrapper>
            <Logo width={111} height={15} />
            <Description>
              Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt
              nostrud excepteur voluptate.
            </Description>
          </BrandWrapper>

          <Social>
            <TitleSocial>Find us here:</TitleSocial>
            <SocialList items={socialData} />
          </Social>
        </Brand>

        <Menu>
          <Title>About</Title>

          <MenuList>
            {FooterRoutesLeft.map((item) => {
              return (
                <MenuItem key={item.route}>
                  <MenuLink onClick={() => onNavigate(item.route)}>
                    {item.label}
                  </MenuLink>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>

        <Menu>
          <Title>Useful Links</Title>

          <MenuList>
            {FooterRoutesRight.map((item) => {
              return (
                <MenuItem key={item.route}>
                  <MenuLink onClick={() => onNavigate(item.route)}>
                    {item.label}
                  </MenuLink>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>

        <Newsletter>
          <Title>Newsletter</Title>

          <NewsletterWrapper>
            <Description>
              Subscribe to be the first to hear about deals, offers and upcoming
              collections.
            </Description>

            <SubscribeForm />
          </NewsletterWrapper>
        </Newsletter>
      </FooterWrapper>

      <Bottom>
        <CopyrightContainer>
          <TitleHidden>Copyright</TitleHidden>

          <Description>© All right reserved. Fashionee 2020</Description>
        </CopyrightContainer>

        <PaymentsContainer>
          <TitleHidden>Payments</TitleHidden>

          <Description>Payment methods:</Description>

          <PaymentsList>
            {PaymentsListData.map((item) => {
              return (
                <PaymentsItem key={item.title}>
                  <PaymentsLink href={item.src} target="_blank">
                    <PaymentsLogo src={item.logo} alt={item.title} />
                  </PaymentsLink>
                </PaymentsItem>
              );
            })}
          </PaymentsList>
        </PaymentsContainer>
      </Bottom>
    </FooterContainer>
  );
}
