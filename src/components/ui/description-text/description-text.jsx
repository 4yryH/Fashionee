import React from "react";

export function DescriptionText({
                                  content,
                                  className = "",
                                  fontSize = "14px",
                                  fontFamily = "Raleway",
                                  style = {},
                                  color = "#444444",
                                  lineHeight = "1.7"
                                }) {
  return (
    <p
      className={className}
      style={{
        fontSize,
        fontFamily,
        color,
        lineHeight,
        ...style
      }}
    >
      {content}
    </p>
  );
}
