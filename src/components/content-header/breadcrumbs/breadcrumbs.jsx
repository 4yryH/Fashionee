import React from 'react';
import "./breadcrumbs.css"

export function Breadcrumbs({
                              items = [],
                              ulClassName = "breadcrumbs",
                              liClassName = "breadcrumbs__item",
                              linkClassName = "breadcrumbs__link",
                              currentLinkClassName = "breadcrumbs__link--current"
                            }) {
  return (
    <ul className={ulClassName}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        // если последний — добавляем класс current, иначе — обычный
        const cls = isLast
          ? `${linkClassName} ${currentLinkClassName}`.trim()
          : linkClassName;

        return (
          <li key={item.label + idx} className={liClassName}>
            {isLast
              ? (
                // Текущая страница — просто span
                <span className={cls}>
                  {item.label}
                </span>
              ) : (
                // Остальные крошки — кнопки
                <button
                  type="button"
                  className={cls}
                  onClick={item.onClick}
                >
                  {item.label}
                </button>
              )
            }
          </li>
        );
      })}
    </ul>
  );
}
