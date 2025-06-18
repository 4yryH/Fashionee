import React from "react";
import "./input.css"

// универсальный инпут
export function Input({
                        asListItem = false, // если true — оборачиваем в <li>
                        inputProps = {},
                        labelProps = {},
                        liProps = {},
                      }) {
  const input = <input
    className={inputProps.className || ''}
    id={inputProps.id || ''}
    name={inputProps.name || ''}
    type={inputProps.type || 'text'}
    value={inputProps.value}
  />

  const label = <label
    className={labelProps.className}
    htmlFor={labelProps.htmlFor}>
    {labelProps.content}</label>

  return asListItem ? (
    <li {...liProps} className={liProps.className || ''}>
      {input}
      {label}
    </li>
  ) : (
    {input, label}
  );


}
