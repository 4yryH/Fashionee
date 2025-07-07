import React from 'react';
import { Title } from '../ui/title/Title.jsx';
import './PromoCode.css';
import { DescriptionText } from '../ui/description-text/DescriptionText.jsx';
import ButtonIcon from '../../assets/icons/button-decor-arrow.svg?react';
import socialData from '../../data/SocialData.json';
import { SocialList } from '../ui/social-list/social-list.jsx';

// блок с вводом промокода, пока никакой логики в нем нет
export function PromoCode() {
  return (
    <div className="content-footer-cart__wrapper">
      <div className="content-page__footer-text-wrapper">
        <Title
          className="content-page__footer-title"
          content="You have a promo code?"
          fontSize="32px"
        />
        <DescriptionText
          className="content-page__footer-text"
          content="To receive up-to-date promotional codes, subscribe to us on social
          networks."
        />
      </div>
      <form action="" className="promo-code__form">
        <label className="visually-hidden" htmlFor="promo-code">
          Subscribe
        </label>
        <input
          className="promo-code__input"
          id="promo-code"
          name="promo-code"
          placeholder="Enter promo code"
          type="text"
        />
        <button className="promo-code__button">
          <ButtonIcon
            className="promo-code__button-icon"
            height="12"
            width="21"
          />
        </button>
      </form>
      <section className="footer__social">
        <Title
          content="Find us here:"
          fontSize="16px"
          fontWeight="500"
          fontFamily="Raleway"
        />
        <SocialList items={socialData} />
      </section>
    </div>
  );
}
