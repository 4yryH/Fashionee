import React from "react";
import SearchIcon from "../../assets/icons/search.svg?react"
import "./search.css"

// поиск в хедере, пока без логики, только иконка
export function Search() {
  return (
    <li className="header__user-menu-item">
    <button className="header__user-menu-link">
      <SearchIcon className="header__user-menu-icon header__user-menu-icon--search" width={18} height={18} />
    </button>
    </li>
  )
}
