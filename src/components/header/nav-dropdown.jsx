import React from 'react';
import {DropDownsItem} from "./dropdowns-item.jsx";
import DropdownsIcon from "../../assets/icons/dropdowns.svg?react"
import "./nav-dropdown.css"

// кнопка страницы с выпадающим списком, принимает название кнопки и список выпадающих кнопок
export function NavDropdown({title, items}) {
  return (
    <li className="header__nav-item">
      <button className="header__nav-link">{title}</button>
      <details className="header__dropdowns">
        <summary className="header__dropdowns-summary">
          <DropdownsIcon className="header__dropdowns-icon"/>
        </summary>
        <ul className="header__dropdowns-list">
          {items.map((page) => (
            <DropDownsItem key={page} page={page}/>
          ))}
        </ul>
      </details>
    </li>
  );
}