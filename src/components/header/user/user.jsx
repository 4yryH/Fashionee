import React from "react";
import UserIcon from "../../../assets/icons/user.svg?react"

export function UserInfo() {
  return (
    <li className="header__user-menu-item">
      <button className="header__user-menu-link">
        <UserIcon className="header__user-menu-icon header__user-menu-icon--user" width={20} height={20} />
      </button>
    </li>
  )
}
