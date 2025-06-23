import React from 'react';
import './burger-menu.css';

export function BurgerMenu() {
  return (
    <div className="header__burger-menu-wrapper">
      <input
        type="checkbox"
        className="header__burger-checkbox"
        id="burger-checkbox"
      />
      <label htmlFor="burger-checkbox" className="header__burger-label"></label>
    </div>
  );
}
