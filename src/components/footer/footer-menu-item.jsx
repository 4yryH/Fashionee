import React from 'react';
import "./footer-menu-item.css"

export function FooterMenuItem({title}) {
  return (
    <li className="footer__menu-item">
      <button className="footer__menu-link">{title}</button>
    </li>
  )
}