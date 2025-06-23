import React from 'react';

// универсальный элемент для текста, изначальные стили заданы
export function DescriptionText({
  content,
  className = '',
  fontSize = '14px',
  fontFamily = 'Raleway',
  style = {},
  color = '#444444',
  lineHeight = '1.7',
}) {
  return (
    <p
      className={className}
      style={{
        fontSize,
        fontFamily,
        color,
        lineHeight,
        ...style,
      }}
    >
      {content}
    </p>
  );
}
