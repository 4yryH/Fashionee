import React from "react";
import {Logo} from "../ui/logo.jsx";
import {NavigationPages} from "./navigation-pages.jsx";
import {NavDropdown} from "./nav-dropdown.jsx";
import {BurgerMenu} from "./burger-menu.jsx";
import {Search} from "./search.jsx";
import {UserInfo} from "./user.jsx";
import {Favorite} from "./favorite.jsx";
import {Cart} from "./cart.jsx";
import "./header.css"

// Создал массив с перечнем выпадающего списка Pages
const dropDownPages = ["Home", "About", "Shop", "Contact", "Blog", "FAQ", "Cart", "Wishlist", "My profile",];

// Создал массив с перечнем выпадающего списка Shop
const dropDownShop = ["All", "Men", "Women", "Accessories", "New Arrival",];

export function Header() {
  return (
    <header className="header">
      <div className="header__wrapper-left-side">
        <div className="header__wrapper">
          <BurgerMenu/>
          <Logo className="header__logo" width={111} height={15}/>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <NavigationPages page="Home"/>
            <NavDropdown title="Pages" items={dropDownPages}/>
            <NavDropdown title="Shop" items={dropDownShop}/>
            <NavigationPages page="Blog"/>
            <NavigationPages page="Contact"/>
          </ul>
        </nav>
      </div>
      <div className="header__wrapper-right-side">
        <ul className="header__user-menu-list">
          <Search/>
          <UserInfo/>
          <Favorite/>
          <Cart/>
        </ul>
      </div>
    </header>
  );
}
