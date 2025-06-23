import React from 'react';
import './App.css';
import './index.css';
import { Header } from './components/header/header.jsx';
import { Footer } from './components/footer/footer.jsx';
import { ContentHeader } from './components/content-header/content-header.jsx';
import { ShopPage } from './pages/shop/shop.jsx';
import { CartPage } from './pages/cart/cart.jsx';
import { Title } from './components/ui/title/title.jsx';
import productsData from './data/products.json';
import { useLocalStorage } from './hooks/use-local-storage.jsx';
import { titles } from './data/title-pages-data.jsx';
import { crumbRoutes } from './data/breadcrumbs-data.jsx';

const products = productsData.products;

function App() {
  const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 'shop');

  const getBreadcrumbs = (page) => {
    const routes = crumbRoutes[page] || ['home'];

    return routes.map((route, idx) => ({
      // метка — с большой буквы
      label: route[0].toUpperCase() + route.slice(1),
      // onClick только если это не последний элемент
      ...(idx < routes.length - 1
        ? { onClick: () => setCurrentPage(route) }
        : {}),
    }));
  };

  // счетчик корзины в шапке
  const [cartItems, setCartItems] = useLocalStorage('cart');

  // общее число товаров для иконки в шапке
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // счетчик избранного
  const [favoriteIds, setFavoriteIds] = useLocalStorage('favorites', []);

  // toggle для избранного
  const handleToggleFavorite = (productId) => {
    setFavoriteIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // корзина
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((x) => x.id === product.id);
      if (exist) {
        return prev.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  // изменение количества на карточке
  const handleQuantityChange = (id, qty) => {
    // если qty === 0 — удаляем
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((x) => x.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((x) => (x.id === id ? { ...x, quantity: qty } : x))
      );
    }
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

      {currentPage === 'shop' && (
        <ShopPage
          products={products} // список товаров
          favoriteIds={favoriteIds} // где уже есть в избранном
          onToggleFavorite={handleToggleFavorite} // колбек переключения избранного
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onQuantityChange={handleQuantityChange}
        />
      )}

      {currentPage === 'all' && <ShopPage />}

      {currentPage === 'cart' && (
        <CartPage
          cartItems={cartItems}
          onRemoveItem={(id) => handleQuantityChange(id, 0)}
          onQuantityChange={handleQuantityChange}
        />
      )}

      {/*Да я опять впереди поезда бегу*/}
      {currentPage === 'home' && (
        <Title content="Home page in process..." fontSize="48px" />
      )}
      {currentPage === 'blog' && (
        <Title content="Blog page in process..." fontSize="48px" />
      )}
      {currentPage === 'contact' && (
        <Title content="Contact page in process..." fontSize="48px" />
      )}
      {currentPage === 'about' && (
        <Title content="About Us page in process..." fontSize="48px" />
      )}
      {currentPage === 'faq' && (
        <Title content="FAQ page in process..." fontSize="48px" />
      )}
      {currentPage === 'wishlist' && (
        <Title content="Wishlist page in process..." fontSize="48px" />
      )}
      {currentPage === 'profile' && (
        <Title content="My Profile page in process..." fontSize="48px" />
      )}
      {currentPage === 'collections' && (
        <Title content="Collections page in process..." fontSize="48px" />
      )}
      {currentPage === 'privacy' && (
        <Title content="Privacy Policy page in process..." fontSize="48px" />
      )}
      {currentPage === 'terms' && (
        <Title content="Terms of use page in process..." fontSize="48px" />
      )}
      {currentPage === 'support' && (
        <Title content="Support page in process..." fontSize="48px" />
      )}
      {currentPage === 'shipping' && (
        <Title content="Shipping details page in process..." fontSize="48px" />
      )}

      <Footer onNavigate={setCurrentPage} />
    </>
  );
}

export default App;
