import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '../ui/logo/Logo.jsx';
import { BurgerMenu } from '../burger-menu/BurgerMenu.jsx';
import { SearchHeader } from '../search-header/SearchHeader.jsx';
import { UserInfo } from '../user-header/UserHeader.jsx';
import { FavoriteHeader } from '../favorite-header/FavoriteHeader.jsx';
import { Cart } from '../cart/Cart.jsx';
import { dropDownPages, dropDownShop } from '../../data/DropdownData.jsx';
import {
  HeaderContainer,
  LeftSide,
  Wrapper,
  RightSide,
  NavList,
  UserMenuList,
  NavItem,
  NavLink,
  StyledDropdownList,
  DropdownLink,
  Navigation,
  StyledDropdownIcon,
} from './Header.styles.js';

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
    <NavItem ref={pagesRef}>
      <NavLink
        type="button"
        isActive={currentPage === 'pages'}
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
        <StyledDropdownIcon />
      </NavLink>
      {showPages && (
        <StyledDropdownList>
          {dropDownPages.map((item) => (
            <li key={item.id}>
              <DropdownLink
                onClick={() => {
                  onNavigate(item.route);
                  setShowPages(false);
                }}
              >
                {item.label}
              </DropdownLink>
            </li>
          ))}
        </StyledDropdownList>
      )}
    </NavItem>
  );

  // Аналогично для Shop, но при выборе страницы shop, элемент должен стать стилистически current
  const shopNode = (
    <NavItem ref={shopRef}>
      <NavLink
        type="button"
        isActive={currentPage === 'shop'}
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
        <StyledDropdownIcon />
      </NavLink>
      {showShop && (
        <StyledDropdownList>
          {dropDownShop.map((item) => (
            <li key={item.id}>
              <DropdownLink
                onClick={() => {
                  onNavigate(item.route);
                  setShowShop(false);
                }}
              >
                {item.label}
              </DropdownLink>
            </li>
          ))}
        </StyledDropdownList>
      )}
    </NavItem>
  );

  return (
    <HeaderContainer>
      <LeftSide>
        <Wrapper>
          <BurgerMenu />
          <Logo width={111} height={15} />
        </Wrapper>
        <Navigation>
          <NavList>
            <NavItem>
              <NavLink
                type="button"
                isActive={currentPage === 'home'}
                onClick={() => onNavigate('home')}
              >
                Home
              </NavLink>
            </NavItem>
            {/*кнопки с выпадающим списком*/}
            {pagesNode}
            {shopNode}
            <NavItem>
              <NavLink
                type="button"
                isActive={currentPage === 'blog'}
                onClick={() => onNavigate('blog')}
              >
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                type="button"
                isActive={currentPage === 'contact'}
                onClick={() => onNavigate('contact')}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavList>
        </Navigation>
      </LeftSide>
      <RightSide>
        <UserMenuList>
          <SearchHeader />
          {/*личный кабинет*/}
          <UserInfo />
          {/*избранное, должно дополниться логикой перехода на страницу с избранным,
          пока только работает счетчик*/}
          <FavoriteHeader
            count={favCount}
            onClick={() => onNavigate('favorite-header')}
          />
          {/*корзина, работает как ссылка перехода на страницу cart и реализован счетчик товаров*/}
          <Cart count={cartCount} onClick={() => onNavigate('cart')} />
        </UserMenuList>
      </RightSide>
    </HeaderContainer>
  );
}
