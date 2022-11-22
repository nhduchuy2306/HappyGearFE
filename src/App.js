import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Content from "./components/Content/Content";
import { Route, Routes } from "react-router-dom";
import Register from './components/Register/Register';
import ProductList from "./components/Products/ProductList";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Content />} exact />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register/>} />
          <Route path="products" element={<ProductList/>} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
