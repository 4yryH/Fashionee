import React from 'react';
import "./dropdowns-item.css"

// для выпадающего списка
export function DropDownsItem(props) {
  return (
    <li className="header__dropdowns-item">
      <button className="header__dropdowns-link">{props.page}</button>
    </li>
  )
}