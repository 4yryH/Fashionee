import React from 'react';
import {
  BreadcrumbButton,
  BreadcrumbCurrent,
  BreadcrumbItem,
  BreadcrumbsList,
} from './Breadcrumbs.styles.js';

// хлебные крошки
export function Breadcrumbs({ items = [] }) {
  return (
    <BreadcrumbsList>
      {items.map((item, index) => {
        // если последний — current
        const isLast = index === items.length - 1;
        return (
          <BreadcrumbItem key={item.label + index}>
            {isLast ? (
              // Текущая страница
              <BreadcrumbCurrent>{item.label}</BreadcrumbCurrent>
            ) : (
              // Остальные крошки — кнопки
              <BreadcrumbButton type="button" onClick={item.onClick}>
                {item.label}
              </BreadcrumbButton>
            )}
          </BreadcrumbItem>
        );
      })}
    </BreadcrumbsList>
  );
}
