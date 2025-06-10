import React from 'react';
import "./navigation-pages.css"

// для кнопок навигации
export function NavigationPages(props) {
  return (
    <li className="header__nav-item">
      <button className="header__nav-link">{props.page}</button>
    </li>
  )
}