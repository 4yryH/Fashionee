import './App.css'
import "./index.css"
import {Header} from "./components/header/header/header.jsx";
import {Footer} from "./components/footer/footer/footer.jsx";
import {ContentHeader} from "./components/content-header/content-header/content-header.jsx";
import {ShopPage} from "./pages/shop/shop.jsx";
import {CartPage} from "./pages/cart/cart.jsx";

function App() {

  return (
    <>
      <Header/>
      <ContentHeader title="Cart" breadcrumbItems={["Home", "Shop", "Cart"]}/>
      {/*<ShopPage/>*/}
      <CartPage/>
      <Footer/>
    </>
  )
}

export default App
