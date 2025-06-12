import React from "react";
import {Logo} from "../../ui/logo/logo.jsx";
import {Link} from "../../ui/link/link.jsx";
import {Title} from "../../ui/title/title.jsx";
import {SubscribeForm} from "../../ui/subscribe-form/subscribe-form.jsx";
import visaIcon from "../../../assets/icons/visa.png";
import masterCardIcon from "../../../assets/icons/mastercard.png";
import paypalIcon from "../../../assets/icons/paypal.png";
import payoneer from "../../../assets/icons/payoneer.png";
import {Button} from "../../ui/button/button.jsx";
import {DescriptionText} from "../../ui/description-text/description-text.jsx";
import "./footer.css";
import "../social/social.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <section className="footer__brand">
          <div className="footer__brand-wrapper">
            <Logo width={111} height={15}/>
            <DescriptionText content="Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur
      voluptate."/>
          </div>
          <section className="footer__social">
            <Title content="Find us here:" fontSize="16px" fontWeight="500" fontFamily="Raleway"/>

            <ul className="social-list">
              <Link asListItem={true}
                    liProps={{className: "social-item"}}
                    linkProps={{className: "social-link", href: "#", target: "_blank", title: "Fb"}}/>

              <Link asListItem={true}
                    liProps={{className: "social-item"}}
                    linkProps={{className: "social-link", href: "#", target: "_blank", title: "Tw"}}/>

              <Link asListItem={true}
                    liProps={{className: "social-item"}}
                    linkProps={{className: "social-link", href: "#", target: "_blank", title: "Ins"}}/>

              <Link asListItem={true}
                    liProps={{className: "social-item"}}
                    linkProps={{className: "social-link", href: "#", target: "_blank", title: "Pt"}}/>
            </ul>
          </section>
        </section>
        <section className="footer__menu">
          <Title content="About"/>

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
          <Title content="Useful Links"/>

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
          <Title content="Newsletter"/>
          <div className="footer__newsletter-wrapper">
            <DescriptionText content="Subscribe to be the first to hear about deals, offers and upcoming
          collections."/>

            <SubscribeForm/>
          </div>
        </section>
      </div>
      <section className="footer__bottom">
        <div className="footer__copyright">
          <Title content="Copyright" className="visually-hidden"/>
          <DescriptionText content="© All right reserved. Fashionee 2020"/>
        </div>
        <div className="footer__payments">
          <Title content="Payments" className="visually-hidden"/>
          <DescriptionText content="Payment methods:"/>

          <ul className="footer__payments-list">
            <Link asListItem={true}
                  linkProps={{href: "#", target: "_blank"}}
                  imgProps={{width: 33, height: 20, src: visaIcon}}/>

            <Link asListItem={true}
                  linkProps={{href: "#", target: "_blank"}}
                  imgProps={{width: 33, height: 20, src: masterCardIcon}}/>

            <Link asListItem={true}
                  linkProps={{href: "#", target: "_blank"}}
                  imgProps={{width: 33, height: 20, src: paypalIcon}}/>

            <Link asListItem={true}
                  linkProps={{href: "#", target: "_blank"}}
                  imgProps={{width: 33, height: 20, src: payoneer}}/>
          </ul>
        </div>
      </section>
    </footer>
  );
}
