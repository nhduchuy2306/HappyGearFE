import React from "react";

// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Login from "./components/Login/Login";
// import MainPage from "./components/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
// import Register from "./components/Register/Register";
// import ProductList from "./components/Products/ProductList";
// import Policy from "./pages/Policy/Policy";
// import Cart from "./components/Cart/Cart";
// import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
// import Checkout from "./components/Checkout/Checkout";

import HeaderAdmin from "./admin/Header/Header";
import User from './admin/User/User';
import Product from './admin/Product/Product';

function App() {
  
  return (
    <div className="App">
      {/* <div className="header">
        <Header />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MainPage />} exact />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<ProductList />} exact />
          <Route path="products/product-detail" element={<ProductDetail />} />
          <Route path="policy" element={<Policy />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div> */}
      <div className="header">
        <HeaderAdmin />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="user" element={<User />} exact />
          <Route path="product" element={<Product />} />
        </Routes>
      </div>
    
    </div>
  );
}

export default App;
