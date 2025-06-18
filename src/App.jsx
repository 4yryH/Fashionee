import React, {useState} from 'react';
import './App.css'
import "./index.css"
import {Header} from "./components/header/header.jsx";
import {Footer} from "./components/footer/footer.jsx";
import {ContentHeader} from "./components/content-header/content-header.jsx";
import {ShopPage} from "./pages/shop/shop.jsx";
import {CartPage} from "./pages/cart/cart.jsx";
import initialCart from "./data/cart-data.json";
import {Title} from "./components/ui/title/title.jsx";
import initialProducts from './data/product-card-data.json';

// 1
function App() {
  // хлебные крошки
  const [currentPage, setCurrentPage] = useState('shop');

  const crumbRoutes = {
    home: ['home'],
    shop: ['home', 'shop'],
    cart: ['home', 'shop', 'cart'],
    blog: ['home', 'blog'],
    contact: ['home', 'contact'],
    about: ['home', 'About Us'],
    faq: ['home', 'FAQ'],
    wishlist: ['home', 'Wishlist'],
    profile: ['home', 'My Profile'],
    collections: ['home', 'Collections'],
    privacy: ['home', 'Privacy Policy'],
    terms: ['home', 'Terms of use'],
    support: ['home', 'Support'],
    shipping: ['home', 'Shipping details'],
  };

  const getBreadcrumbs = (page) => {
    const routes = crumbRoutes[page] || ['home'];

    return routes.map((route, idx) => ({
      // метка — с большой буквы
      label: route[0].toUpperCase() + route.slice(1),
      // onClick только если это не последний элемент
      ...(idx < routes.length - 1
          ? {onClick: () => setCurrentPage(route)}
          : {}
      )
    }));
  };

  const titles = {
    home: "Home",
    shop: 'Shop',
    all: 'Shop',
    men: 'Shop',
    women: 'Shop',
    accessories: 'Shop',
    arrival: 'Shop',
    cart: 'Cart',
    blog: 'Blog',
    contact: 'Contact',
    about: 'About Us',
    faq: 'FAQ',
    wishlist: 'Wishlist',
    profile: 'My Profile',
    collections: 'Collections',
    privacy: 'Privacy Policy',
    terms: 'Terms of use',
    support: 'Support',
    shipping: 'Shipping details',
  };

  // счетчик корзины в шапке
  const [cartItems, setCartItems] = useState(initialCart);

  // удаление из корзины
  const handleRemoveItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // изменение количества
  const handleQuantityChange = (id, newQty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? {...item, quantity: newQty} : item
      )
    );
  };

  // общее число товаров для иконки в шапке
  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // счетчик избранного
  const [products] = useState(initialProducts);

  const [favoriteIds, setFavoriteIds] = useState([]);

  // toggle для избранного
  const handleToggleFavorite = (productId) => {
    setFavoriteIds(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <>
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        favCount={favoriteIds.length}
        cartCount={cartCount}
      />

      <ContentHeader
        title={titles[currentPage]}
        breadcrumbItems={getBreadcrumbs(currentPage)}
      />

      {currentPage === 'shop' &&
        <ShopPage
          products={products} // список товаров
          favoriteIds={favoriteIds} // где уже есть в избранном
          onToggleFavorite={handleToggleFavorite} // колбек переключения избранного
        />}
      {/*{currentPage === 'all' && <ShopPage/>}*/}

      {currentPage === 'cart' && <CartPage
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onQuantityChange={handleQuantityChange}/>}
      {/*Да я опять впереди поезда бегу*/}
      {currentPage === 'home' && <Title content="Home page in process..." fontSize="48px"/>}
      {currentPage === 'blog' && <Title content="Blog page in process..." fontSize="48px"/>}
      {currentPage === 'contact' && <Title content="Contact page in process..." fontSize="48px"/>}
      {currentPage === 'about' && <Title content="About Us page in process..." fontSize="48px"/>}
      {currentPage === 'faq' && <Title content="FAQ page in process..." fontSize="48px"/>}
      {currentPage === 'wishlist' && <Title content="Wishlist page in process..." fontSize="48px"/>}
      {currentPage === 'profile' && <Title content="My Profile page in process..." fontSize="48px"/>}
      {currentPage === 'collections' && <Title content="Collections page in process..." fontSize="48px"/>}
      {currentPage === 'privacy' && <Title content="Privacy Policy page in process..." fontSize="48px"/>}
      {currentPage === 'terms' && <Title content="Terms of use page in process..." fontSize="48px"/>}
      {currentPage === 'support' && <Title content="Support page in process..." fontSize="48px"/>}
      {currentPage === 'shipping' && <Title content="Shipping details page in process..." fontSize="48px"/>}

      <Footer
        onNavigate={setCurrentPage}/>
    </>
  )
}

export default App
