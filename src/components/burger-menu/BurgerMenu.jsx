import React from 'react';
import { BurgerCheckbox, BurgerLabel } from './BurgerMenu.styles.js';

export function BurgerMenu(id = 'burger-toggle', checked, onChange) {
  return (
    <>
      <BurgerCheckbox id={id} checked={checked} onChange={onChange} />
      <BurgerLabel htmlFor={id} />
    </>
  );
}
