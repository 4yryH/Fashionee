import React from 'react';
import './breadcrumbs.css';

// хлебные крошки
export function Breadcrumbs({
  items = [],
  ulClassName = 'breadcrumbs',
  liClassName = 'breadcrumbs__item',
  linkClassName = 'breadcrumbs__link',
  currentLinkClassName = 'breadcrumbs__link--current',
}) {
  return (
    <ul className={ulClassName}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        // если последний — добавляем класс current
        const cls = isLast
          ? `${linkClassName} ${currentLinkClassName}`.trim()
          : linkClassName;

        return (
          <li key={item.label + idx} className={liClassName}>
            {isLast ? (
              // Текущая страница — просто span
              <span className={cls}>{item.label}</span>
            ) : (
              // Остальные крошки — кнопки
              <button type="button" className={cls} onClick={item.onClick}>
                {item.label}
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
