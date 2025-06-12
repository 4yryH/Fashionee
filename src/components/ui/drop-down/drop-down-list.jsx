import React from 'react';
import {DropDownsItem} from "./dropdowns-item.jsx";


// для выпадающих списков
export function DropDownList({items, ulProps}) {
  return (
    <ul className={ulProps.className}>
      {items.map((page) => (
        <DropDownsItem key={page} page={page}/>
      ))}
    </ul>
  );
}
