import React from "react";
import FavoriteIcon from "../../assets/icons/favorite.svg?react"
import "./favorite.css"

export function Favorite() {
  // счетчик пока думаю будет реализован позже, при добавлении товара в favorite
  // будет вызываться функция, которая будет отрабатывать с переменной,
  // например, CountFavorite и передаваться сюда и соответственно меняться
  return (
    <li className="header__user-menu-item">
      <button className="header__user-menu-link">
        <FavoriteIcon className="header__user-menu-icon header__user-menu-icon--favorite" width={19} height={18}/>
        <span className="header__counter header__counter--favorite">0</span>
      </button>
    </li>
  )
}