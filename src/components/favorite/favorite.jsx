import React from "react";
import FavoriteIcon from "../../assets/icons/favorite.svg?react"
import "./favorite.css"

export function Favorite({
                           count = 0, // прокидывается из App.jsx
                           onClick
                         }) {
  return (
    <li className="header__user-menu-item">
      <button
        className="header__user-menu-link"
        type="button"
        aria-label="My favorites"
        onClick={onClick}
      >
        <FavoriteIcon
          className="header__user-menu-icon header__user-menu-icon--favorite"
          width={19}
          height={18}
        />
        <span className="header__counter header__counter--favorite">
          {count}
        </span>
      </button>
    </li>
  )
}
