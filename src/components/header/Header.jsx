import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '../ui/logo/Logo.jsx';
import { BurgerMenu } from '../burger-menu/BurgerMenu.jsx';
import { SearchHeader } from '../search-header/SearchHeader.jsx';
import { UserInfo } from '../user/User.jsx';
import { Favorite } from '../favorite/Favorite.jsx';
import { Cart } from '../cart/Cart.jsx';
import { Button } from '../ui/button/Button.jsx';
import { DropdownList } from '../ui/drop-down-list/DropdownList.jsx';
import { dropDownPages, dropDownShop } from '../../data/DropdownData.jsx';
import DropdownsIcon from '../../assets/icons/dropdowns.svg?react';
import './Header.css';

// шапка с навигацией, счетчиками избранного и корзиной
export function Header({ currentPage, onNavigate, favCount, cartCount }) {
  // начальное состояние для дропдаунов pages и shop
  const [showPages, setShowPages] = useState(false);
  const [showShop, setShowShop] = useState(false);

  const pagesRef = useRef(null);
  const shopRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        showPages &&
        pagesRef.current &&
        !pagesRef.current.contains(e.target)
      ) {
        setShowPages(false);
      }
      if (showShop && shopRef.current && !shopRef.current.contains(e.target)) {
        setShowShop(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
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
          setShowPages(true);
          setShowShop(false);
        }}
        onClick={() => {
          setShowPages((v) => !v);
          setShowShop(false);
        }}
      >
        Pages
        <DropdownsIcon className="header__dropdowns-icon" />
      </button>
      {showPages && (
        <DropdownList
          items={dropDownPages}
          ulProps={{
            className: 'header__dropdowns-list header__dropdowns-list-pages',
          }}
          onItemClick={(route) => {
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
          setShowShop(true);
          setShowPages(false);
        }}
        onClick={() => {
          setShowShop((v) => !v);
          setShowPages(false);
          onNavigate('shop');
        }}
      >
        Shop
        <DropdownsIcon className="header__dropdowns-icon" />
      </button>
      {showShop && (
        <DropdownList
          items={dropDownShop}
          ulProps={{
            className: 'header__dropdowns-list header__dropdowns-list-shop',
          }}
          onItemClick={(route) => {
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
          <BurgerMenu />
          <Logo className="header__logo" width={111} height={15} />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <Button
              asListItem
              liProps={{ className: 'header__nav-item' }}
              btnProps={{
                className: `header__nav-link ${currentPage === 'home' ? 'header__nav-link--current' : ''}`,
                content: 'Home',
                onClick: () => onNavigate('home'),
              }}
            />
            {/*кнопки с выпадающим списком*/}
            {pagesNode}
            {shopNode}
            <Button
              asListItem
              liProps={{ className: 'header__nav-item' }}
              btnProps={{
                className: `header__nav-link ${currentPage === 'blog' ? 'header__nav-link--current' : ''}`,
                content: 'Blog',
                onClick: () => onNavigate('blog'),
              }}
            />
            <Button
              asListItem
              liProps={{ className: 'header__nav-item' }}
              btnProps={{
                className: `header__nav-link ${currentPage === 'contact' ? 'header__nav-link--current' : ''}`,
                content: 'Contact',
                onClick: () => onNavigate('contact'),
              }}
            />
          </ul>
        </nav>
      </div>
      <div className="header__wrapper-right-side">
        <ul className="header__user-menu-list">
          <SearchHeader />
          {/*личный кабинет*/}
          <UserInfo />
          {/*избранное, должно дополниться логикой перехода на страницу с избранным,
          пока только работает счетчик*/}
          <Favorite count={favCount} onClick={() => onNavigate('favorite')} />
          {/*корзина, работает как ссылка перехода на страницу cart и реализован счетчик товаров*/}
          <Cart count={cartCount} onClick={() => onNavigate('cart')} />
        </ul>
      </div>
    </header>
  );
}
