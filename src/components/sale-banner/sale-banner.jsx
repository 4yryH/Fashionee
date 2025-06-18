import React from 'react';
import "./sale-banner.css"

// рекламный блок с баннером
export function SaleBanner() {
  return (
  <aside className="sale-banner">
    <h2 className="sale-banner__title">Season <span className="sale-banner__title-extra">sale&nbsp;</span></h2>
    <p className="sale-banner-description">Non aliqua reprehenderit<br/>
      reprehenderit culpa<br/>
      laboris nulla</p>
    <a className="sale-banner__link" href="#">Shop now</a>
  </aside>
  )
}
