import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import Register from './components/Register/Register';
import ProductList from './components/Products/ProductList';
import Policy from "./pages/Policy/Policy"

function App() {
  return (
    
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="main-content">
        <Routes>
            <Route path="/" element={<MainPage />} exact />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register/>} />
            <Route path="products" element={<ProductList/>} />
            <Route path="policy" element={<Policy/>} />
        </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
      // <Route path="dashboard" element={<Dashboard/>} />
  );
}

export default App;
