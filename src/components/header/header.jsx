import React, {useState, useEffect, useRef} from "react";
import {Logo} from "../ui/logo/logo.jsx";
import {BurgerMenu} from "../burger-menu/burger-menu.jsx";
import {Search} from "../search-header/search.jsx";
import {UserInfo} from "../user/user.jsx";
import {Favorite} from "../favorite/favorite.jsx";
import {Cart} from "../cart/cart.jsx";
import {Button} from "../ui/button/button.jsx";
import "./header.css";
import DropdownsIcon from "../../assets/icons/dropdowns.svg?react";
import {DropDownList} from "../ui/drop-down-list/drop-down-list.jsx";
import {dropDownPages, dropDownShop} from "../../data/drop-down-data.jsx";

// шапка с навигацией, счетчиками избранного и корзиной
export function Header({
                         currentPage,
                         onNavigate,
                         favCount,
                         cartCount
                       }) {
  // начальное состояние для дропдаунов pages и shop
  const [showPages, setShowPages] = useState(false);
  const [showShop, setShowShop] = useState(false);

  const pagesRef = useRef(null);
  const shopRef = useRef(null);

  useEffect(() => {
    const handler = e => {
      if (showPages && pagesRef.current && !pagesRef.current.contains(e.target)) {
        setShowPages(false);
      }
      if (showShop && shopRef.current && !shopRef.current.contains(e.target)) {
        setShowShop(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showPages, showShop]);

  // Обертка пункта Pages с выпадающим списком страниц,
  // можно и перенести внутрь рендера, но сделал так, потому что много раз ломал рендер
  // долго не мог прокинуть логику на выпадающий список,
  // что это меню в меню с той же логикой навигации как основное
  const pagesNode = (
    <li ref={pagesRef} className="header__nav-item">
      <button
        type="button"
        className={`header__nav-link ${currentPage === 'pages' ? 'header__nav-link--current' : ''}`}
        onMouseEnter={() => {
          setShowPages(true)
          setShowShop(false)
        }}
        onClick={() => {
          setShowPages(v => !v);
          setShowShop(false);
        }}
      >
        Pages
        <DropdownsIcon className="header__dropdowns-icon"/>
      </button>
      {showPages && (
        <DropDownList
          items={dropDownPages}
          ulProps={{className: "header__dropdowns-list header__dropdowns-list-pages"}}
          onItemClick={route => {
            onNavigate(route);
            setShowPages(false);
          }}
        />
      )}
    </li>
  );

  // Аналогично для Shop, но при выборе страницы shop, элемент должен стать стилистически current
  const shopNode = (
    <li ref={shopRef} className="header__nav-item">
      <button
        type="button"
        className={`header__nav-link ${currentPage === 'shop' ? 'header__nav-link--current' : ''}`}
        onMouseEnter={() => {
          setShowShop(true)
          setShowPages(false)
        }}
        onClick={() => {
          setShowShop(v => !v);
          setShowPages(false);
        }}
      >
        Shop
        <DropdownsIcon className="header__dropdowns-icon"/>
      </button>
      {showShop && (
        <DropDownList
          items={dropDownShop}
          ulProps={{className: "header__dropdowns-list header__dropdowns-list-shop"}}
          onItemClick={route => {
            onNavigate(route);
            setShowShop(false);
          }}
        />
      )}
    </li>
  );

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
              asListItem
              liProps={{className: "header__nav-item"}}
              btnProps={{
                className: `header__nav-link ${currentPage === 'home' ? 'header__nav-link--current' : ''}`,
                content: "Home",
                onClick: () => onNavigate('home')
              }}
            />
            {/*кнопки с выпадающим списком*/}
            {pagesNode}
            {shopNode}
            <Button
              asListItem
              liProps={{className: "header__nav-item"}}
              btnProps={{
                className: `header__nav-link ${currentPage === 'blog' ? 'header__nav-link--current' : ''}`,
                content: "Blog",
                onClick: () => onNavigate('blog')
              }}
            />
            <Button
              asListItem
              liProps={{className: "header__nav-item"}}
              btnProps={{
                className: `header__nav-link ${currentPage === 'contact' ? 'header__nav-link--current' : ''}`,
                content: "Contact",
                onClick: () => onNavigate('contact')
              }}
            />
          </ul>
        </nav>
      </div>
      <div className="header__wrapper-right-side">
        <ul className="header__user-menu-list">
          <Search/>
          {/*личный кабинет*/}
          <UserInfo/>
          {/*избранное, должно дополниться логикой перехода на страницу с избранным,
          пока только работает счетчик*/}
          <Favorite
            count={favCount}
            onClick={() => onNavigate('favorite')}
          />
          {/*корзина, работает как ссылка перехода на страницу cart и реализован счетчик товаров*/}
          <Cart
            count={cartCount}
            onClick={() => onNavigate('cart')}
          />
        </ul>
      </div>
    </header>
  );
}
