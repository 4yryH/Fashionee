import React from 'react';

// для выпадающих списков
export function DropdownList({
  items = [],
  ulProps = {},
  onItemClick = () => {},
}) {
  return (
    <ul className={ulProps.className}>
      {items.map(({ label, route, idx }) => (
        <li key={`${route || label}-${idx}`} className="header__dropdowns-item">
          <button
            className="header__dropdowns-link"
            onClick={() => onItemClick(route)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
