import React from "react";
import "./loader.css";

export function Loader() {
  return (
    <div className="loader">
      <div className="spinner" />
      <span className="loader__text">Загрузка товаров...</span>
    </div>
  );
}
