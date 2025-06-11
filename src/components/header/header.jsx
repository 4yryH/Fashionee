import React, {useState} from "react";
import {Logo} from "../ui/logo.jsx";
import {BurgerMenu} from "./burger-menu.jsx";
import {Search} from "./search.jsx";
import {UserInfo} from "./user.jsx";
import {Favorite} from "./favorite.jsx";
import {Cart} from "./cart.jsx";
import {Button} from "../ui/button.jsx";
import "./header.css";
import DropdownsIcon from "../../assets/icons/dropdowns.svg?react";
import {DropDownList} from "../ui/drop-down-list.jsx";
import {dropDownPages, dropDownShop} from "../ui/drop-down-data.jsx";

export function Header() {
  // начальное состояние для dropdown
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);

  // при вызове одного dropdown - закрывается другой
  const toggleShopDropdown = () => {
    setShowShopDropdown(!showShopDropdown);
    if (showPagesDropdown) setShowPagesDropdown(false);
  };

  const togglePagesDropdown = () => {
    setShowPagesDropdown(!showPagesDropdown);
    if (showShopDropdown) setShowShopDropdown(false);
  };

  return (
    <header className="header">
      <div className="header__wrapper-left-side">
        <div className="header__wrapper">
          <BurgerMenu/>
          <Logo className="header__logo" width={111} height={15}/>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <Button
              asListItem={true}
              liProps={{className: "header__nav-item"}}
              btnProps={{className: "header__nav-link", content: "Home"}}
            />
            {/*кнопка с выпадающим списком*/}
            <Button
              asListItem={true}
              liProps={{className: "header__nav-item"}}
              btnProps={{
                className: `header__nav-link ${showPagesDropdown ? "header__nav-link--current" : ""}`,
                content: "Pages",
                onClick: togglePagesDropdown,
              }}
              iconProps={{
                className: "header__dropdowns-icon",
                content: <DropdownsIcon/>,
              }}
            />
            {showPagesDropdown && <DropDownList items={dropDownPages}
                                                ulProps={{className: "header__dropdowns-list header__dropdowns-list-pages"}}/>}

            {/*кнопка с выпадающим списком*/}
            <Button
              asListItem={true}
              liProps={{className: "header__nav-item"}}
              btnProps={{
                className: `header__nav-link ${showShopDropdown ? "header__nav-link--current" : ""}`,
                content: "Shop",
                onClick: toggleShopDropdown,
              }}
              iconProps={{
                className: "header__dropdowns-icon",
                content: <DropdownsIcon/>,
              }}
            />
            {showShopDropdown && <DropDownList items={dropDownShop}
                                               ulProps={{className: "header__dropdowns-list header__dropdowns-list-shop"}}/>}

            <Button
              asListItem={true}
              liProps={{className: "header__nav-item"}}
              btnProps={{className: "header__nav-link", content: "Blog"}}
            />
            <Button
              asListItem={true}
              liProps={{className: "header__nav-item"}}
              btnProps={{className: "header__nav-link", content: "Contact"}}
            />
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
