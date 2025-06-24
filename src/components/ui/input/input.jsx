import React from 'react';
import './input.css';

// универсальный инпут
export function Input({
  asListItem = false,
  inputProps = {},
  labelProps = {},
  liProps = {},
}) {
  const input = <input {...inputProps} />;

  const label = (
    <label className={labelProps.className} htmlFor={labelProps.htmlFor}>
      {labelProps.content}
    </label>
  );

  return asListItem ? (
    <li {...liProps} className={liProps.className || ''}>
      {input}
      {label}
    </li>
  ) : (
    <>
      {input}
      {label}
    </>
  );
}
