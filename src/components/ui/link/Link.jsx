import React from 'react';

// внешние ссылки
export function Link({
  asListItem = false,
  linkProps = {},
  liProps = {},
  imgProps = {},
}) {
  const image = (
    <img
      alt={imgProps.alt}
      className={imgProps.className}
      width={imgProps.width}
      height={imgProps.height}
      src={imgProps.src}
    />
  );

  const link = (
    <a
      className={linkProps.className}
      href={linkProps.href || '#'}
      target={linkProps.target}
    >
      {linkProps.title} {image}
    </a>
  );
  // либо оборачиваем в <li>, либо возвращаем просто <a href...>
  return asListItem ? <li className={liProps.className}>{link}</li> : link;
}
