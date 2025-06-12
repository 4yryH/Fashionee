import React from "react";
import CartIcon from "../../../assets/icons/cart.svg?react"

export function Cart() {
  // счетчик пока думаю будет реализован позже, при добавлении товара в cart
  // будет вызываться функция, которая будет отрабатывать с переменной,
  // например, CountCart и передаваться сюда и соответственно меняться
  return (
    <li className="header__user-menu-item">
      <button className="header__user-menu-link">
        <CartIcon className="header__user-menu-icon header__user-menu-icon--cart" width={20} height={20} />
        <span className="header__counter header__counter--cart">0</span>
      </button>
    </li>
  )
}
