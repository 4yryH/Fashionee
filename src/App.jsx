import './App.css'
import "./index.css"
import {Header} from "./components/header/header/header.jsx";
import {Footer} from "./components/footer/footer/footer.jsx";
import {ContentHeader} from "./components/content-header/content-header/content-header.jsx";
import {ShopPage} from "./pages/shop/shop.jsx";

function App() {

  return (
    <>
      <Header/>
      <ContentHeader title="Shop" breadcrumbItems={["Home", "Shop"]}/>
      <ShopPage/>
      <Footer/>
    </>
  )
}

export default App
