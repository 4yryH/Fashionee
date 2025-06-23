import React from 'react';
import { Title } from '../ui/title/title.jsx';
import { Breadcrumbs } from '../ui/breadcrumbs/breadcrumbs.jsx';
import './content-header.css';

export function ContentHeader({
  title, // заголовок страницы прилетает из app.jsx
  breadcrumbItems = [], // массив крошек прилетает из app.jsx
  imgProps = {}, // пропсы для картинки в шапке, она должна меняться при переходах страниц
}) {
  return (
    <section className="content-header">
      <div className="content-header__wrapper">
        <div className="content-header__wrapper-left">
          <div className="content-header__wrapper-text">
            {/*название страницы*/}
            <Title content={title} hLevel="1" fontSize="80px" lineHeight="1" />
            {/*хлебные крошки*/}
            <Breadcrumbs
              items={breadcrumbItems.map((item) =>
                typeof item === 'string' ? { label: item } : item
              )}
            />
          </div>
        </div>
        <img
          className="content-header__image"
          src={imgProps.src || null}
          alt={imgProps.alt || ''}
          height="400"
          width="400"
        />
      </div>
    </section>
  );
}
