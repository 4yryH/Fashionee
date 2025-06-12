import React from 'react';

// универсальная кнопка
export function Button({
                         btnProps = {},      // содержащий className, content, onClick, type и т. д.
                         asListItem = false, // если true — оборачиваем в <li>
                         liProps = {},       // пропсы для <li>
                         iconProps = {}      // пропсы для иконки (content, className и т.д.)
                       }) {
  // деструкт btnProps, просто так надо что бы накидывать клики и т.п.
  const {
    className: btnClass = '',
    content,
    onClick,
    type = 'button',
    ...otherBtnProps
  } = btnProps;

  const {content: iconContent, className: iconClass = '', ...otherIconProps} = iconProps;

  // сама кнопка с возможностью добавить иконку и прокинуть для нее пропсы
  const button = (
    <button
      type={type}
      className={btnClass}
      onClick={onClick}
      {...otherBtnProps}
    >
      {content}
      {iconContent && (
        <span className={iconClass} {...otherIconProps}>
          {iconContent}
        </span>
      )}
    </button>
  );

  // либо оборачиваем в <li>, либо возвращаем просто кнопку
  return asListItem ? (
    <li {...liProps} className={liProps.className || ''}>
      {button}
    </li>
  ) : (
    button
  );
}
