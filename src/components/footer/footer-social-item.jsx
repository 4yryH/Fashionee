import React from 'react';
import "./footer-social-item.css"

export function FooterSocialItem({link, title}) {
  return (
    <li className="footer__social-item">
      <a className="footer__social-link" href={link} target="_blank">{title}</a>
    </li>
  )
}