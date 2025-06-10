import React from "react";
import {Logo} from "../ui/logo.jsx";
import {FooterDescription} from "./footer-description.jsx";
import {FooterSubtitle} from "./footer-subtitle.jsx";
import {FooterSocialItem} from "./footer-social-item.jsx";
import {FooterTitle, FooterTitleHidden} from "./footer-title.jsx";
import {FooterMenuItem} from "./footer-menu-item.jsx";
import {SubscribeForm} from "./subscribe-form.jsx";
import {FooterPaymentsItem} from "./footer-payments-item.jsx";
import visaIcon from "../../assets/icons/visa.png";
import masterCardIcon from "../../assets/icons/mastercard.png";
import paypalIcon from "../../assets/icons/paypal.png";
import payoneer from "../../assets/icons/payoneer.png";
import "./footer.css"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <section className="footer__brand">
          <div className="footer__brand-wrapper">
            <Logo width={111} height={15}/>
            <FooterDescription text="Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur
      voluptate."/>
          </div>
          <section className="footer__social">
            <FooterSubtitle text="Find us here:"/>
            <ul className="footer__social-list">
              <FooterSocialItem link="#" title="Fb"/>
              <FooterSocialItem link="#" title="Tw"/>
              <FooterSocialItem link="#" title="Ins"/>
              <FooterSocialItem link="#" title="Pt"/>
            </ul>
          </section>
        </section>
        <section className="footer__menu">
          <FooterTitle title="About"/>
          <ul className="footer__menu-list">
            <FooterMenuItem title="About us"/>
            <FooterMenuItem title="Collections"/>
            <FooterMenuItem title="Shop"/>
            <FooterMenuItem title="Blog"/>
            <FooterMenuItem title="Contact us"/>
          </ul>
        </section>
        <section className="footer__menu">
          <FooterTitle title="Useful Links"/>
          <ul className="footer__menu-list">
            <FooterMenuItem title="Privacy Policy"/>
            <FooterMenuItem title="Terms of use"/>
            <FooterMenuItem title="Support"/>
            <FooterMenuItem title="Shipping details"/>
            <FooterMenuItem title="FAQs"/>
          </ul>
        </section>
        <section className="footer__newsletter">
          <FooterTitle title="Newsletter"/>
          <div className="footer__newsletter-wrapper">
            <FooterDescription text="Subscribe to be the first to hear about deals, offers and upcoming
          collections."/>
            <SubscribeForm/>
          </div>
        </section>
      </div>
      <section className="footer__bottom">
        <div className="footer__copyright">
          <FooterTitleHidden title="Copyright"/>
          <FooterDescription text="© All right reserved. Fashionee 2020"/>
        </div>
        <div className="footer__payments">
          <FooterTitleHidden title="Payments"/>
          <FooterDescription text="Payment methods:"/>
          <ul className="footer__payments-list">
            <FooterPaymentsItem link="#" srcImage={visaIcon} width={33} height={20}/>
            <FooterPaymentsItem link="#" srcImage={masterCardIcon} width={33} height={20}/>
            <FooterPaymentsItem link="#" srcImage={paypalIcon} width={33} height={20}/>
            <FooterPaymentsItem link="#" srcImage={payoneer} width={33} height={20}/>
          </ul>
        </div>
      </section>
    </footer>
  );
}