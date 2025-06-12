import React from 'react';

export function Title({
                        content,
                        hLevel = "2",
                        className = "",
                        fontSize = "20px",
                        fontFamily = "Josefin Sans",
                        style = {},
                        color = "#000",
                        lineHeight = "1.2",
                        fontWeight = "400",
                      }) {
  const Heading = `h${hLevel}`;

  return (
    <Heading
      className={className}
      style={{
        fontSize,
        fontFamily,
        color,
        lineHeight,
        fontWeight,
        ...style
      }}
    >
      {content}
    </Heading>
  );
}
