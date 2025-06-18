import React from "react";
import {Logo} from "../ui/logo/logo.jsx";
import {Link} from "../ui/link/link.jsx";
import {Title} from "../ui/title/title.jsx";
import {SubscribeForm} from "../ui/subscribe-form/subscribe-form.jsx";
import visaIcon from "../../assets/icons/visa.png";
import masterCardIcon from "../../assets/icons/mastercard.png";
import paypalIcon from "../../assets/icons/paypal.png";
import payoneer from "../../assets/icons/payoneer.png";
import {Button} from "../ui/button/button.jsx";
import {DescriptionText} from "../ui/description-text/description-text.jsx";
import "./footer.css";
import {SocialList} from "../ui/social-list/social-list.jsx";
import socialData from "../../data/social-data.json";

// футер для каждой страницы, на кнопки со страницами приходит пропс для onClick,
// для дальнейшего рендера содержимого в app.jsx
// Внешние ссылки социал и поддерживаемых способов оплаты открываются в новой вкладке
export function Footer({
                         onNavigate
                       }) {
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
            <SocialList items={socialData}/>
          </section>
        </section>
        <section className="footer__menu">
          <Title content="About"/>

          <ul className="footer__menu-list">
            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{
                      className: "footer__menu-link",
                      content: "About us",
                      onClick: () => onNavigate('about')
                    }}/>

            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{
                      className: "footer__menu-link",
                      content: "Collections",
                      onClick: () => onNavigate('collection')
                    }}/>

            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{
                      className: "footer__menu-link",
                      content: "Shop",
                      onClick: () => onNavigate('shop')
                    }}/>

            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{
                      className: "footer__menu-link",
                      content: "Blog",
                      onClick: () => onNavigate('blog')
                    }}/>

            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{
                      className: "footer__menu-link",
                      content: "Contact us",
                      onClick: () => onNavigate('contact')
                    }}/>
          </ul>
        </section>
        <section className="footer__menu">
          <Title content="Useful Links"/>

          <ul className="footer__menu-list">

            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{
                      className: "footer__menu-link",
                      content: "Privacy Policy",
                      onClick: () => onNavigate('privacy')
                    }}/>

            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{
                      className: "footer__menu-link",
                      content: "Terms of use",
                      onClick: () => onNavigate('terms')
                    }}/>

            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{
                      className: "footer__menu-link",
                      content: "Support",
                      onClick: () => onNavigate('support')
                    }}/>

            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{
                      className: "footer__menu-link",
                      content: "Shipping details",
                      onClick: () => onNavigate('shipping')
                    }}/>

            <Button asListItem={true}
                    liProps={{className: "footer__menu-item"}}
                    btnProps={{
                      className: "footer__menu-link",
                      content: "FAQs",
                      onClick: () => onNavigate('faq')
                    }}/>
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
