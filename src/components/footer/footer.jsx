import React from "react";
import {Logo} from "../ui/logo.jsx";
import {FooterDescription} from "./footer-description.jsx";
import {FooterSubtitle} from "./footer-subtitle.jsx";
import {FooterSocialItem} from "./footer-social-item.jsx";
import {FooterTitle, FooterTitleHidden} from "./footer-title.jsx";
import {SubscribeForm} from "./subscribe-form.jsx";
import {FooterPaymentsItem} from "./footer-payments-item.jsx";
import visaIcon from "../../assets/icons/visa.png";
import masterCardIcon from "../../assets/icons/mastercard.png";
import paypalIcon from "../../assets/icons/paypal.png";
import payoneer from "../../assets/icons/payoneer.png";
import "./footer.css"
import {Button} from "../ui/button.jsx";

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
            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{className: "footer__menu-link", content: "About us"}}/>
            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{className: "footer__menu-link", content: "Collections"}}/>
            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{className: "footer__menu-link", content: "Shop"}}/>
            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{className: "footer__menu-link", content: "Blog"}}/>
            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{className: "footer__menu-link", content: "Contact us"}}/>
          </ul>
        </section>
        <section className="footer__menu">
          <FooterTitle title="Useful Links"/>
          <ul className="footer__menu-list">
            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{className: "footer__menu-link", content: "Privacy Policy"}}/>
            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{className: "footer__menu-link", content: "Terms of use"}}/>
            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{className: "footer__menu-link", content: "Support"}}/>
            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{className: "footer__menu-link", content: "Shipping details"}}/>
            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{className: "footer__menu-link", content: "FAQs"}}/>
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
