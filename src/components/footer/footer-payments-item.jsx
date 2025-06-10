import React from 'react';

export function FooterPaymentsItem({link, srcImage, width, height}) {
  return (
    <li className="footer__payments-item">
      <a className="footer__payments-link" href={link}>
        <img alt="" className="footer__payments-icon" width={width} height={height} src={srcImage}/>
      </a>
    </li>
  )
}