import React from 'react';
import SearchIcon from '../../assets/icons/search.svg?react';
import './SearchHeader.css';

// поиск в хедере, пока без логики, только иконка
export function SearchHeader() {
  return (
    <li className="header__user-menu-item">
      <button className="header__user-menu-link">
        <SearchIcon
          className="header__user-menu-icon header__user-menu-icon--search"
          width={18}
          height={18}
        />
      </button>
    </li>
  );
}
