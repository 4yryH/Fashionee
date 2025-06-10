import React from 'react';
import "./footer-title.css"

export function FooterTitle({title}) {
  return (
    <h2 className="footer__title">{title}</h2>
  )
}

export function FooterTitleHidden({title}) {
  return (
    <h2 className="visually-hidden">{title}</h2>
  )
}