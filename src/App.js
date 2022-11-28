import React from "react";

// import for client
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import ProductList from "./components/Products/ProductList";
import Policy from "./pages/Policy/Policy";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
import Checkout from "./components/Checkout/Checkout";

// import for admin
import HeaderAdmin from "./admin/Header/Header";
import FooterAdmin from "./admin/Footer/Footer";
import User from './admin/User/User';
import Product from './admin/Product/Product';
import Dashboard from './admin/Dashboard/Dashboard'

function App() {

  const isAdmin = false;
  
  return (
    <div className="App">
      <div className="header">
        {isAdmin? <HeaderAdmin/> : <Header />}
      </div>
      <div className="main-content">
        <Routes>
          {/* This is router for client */}
          <Route path="happygear" element={<MainPage />} exact />
          <Route path="" element={<MainPage />} exact />
          <Route path="happygear/login" element={<Login />} />
          <Route path="happygear/register" element={<Register />} />
          <Route path="happygear/products" element={<ProductList />} exact />
          <Route path="happygear/products/product-detail" element={<ProductDetail />} />
          <Route path="happygear/policy" element={<Policy />} />
          <Route path="happygear/cart" element={<Cart />} />
          <Route path="happygear/checkout" element={<Checkout />} />

          {/* This is router for admin */}
          <Route path="admin/" element={<Dashboard />} exact />
          <Route path="admin/user" element={<User />} exact />
          <Route path="admin/product" element={<Product />} exact />

        </Routes>
      </div>
      <div className="footer">
        {isAdmin? <FooterAdmin/> : <Footer />}
      </div>
    </div>
  );
}

export default App;
