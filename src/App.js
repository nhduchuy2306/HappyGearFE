import React,{ useContext } from "react";

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
import User from "./admin/User/User";
import Product from "./admin/Product/Product";
import Dashboard from "./admin/Dashboard/Dashboard";
import Error from "./components/Error/Error";
import { LoginContext } from "./context/LoginContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

function App() {
  const isAdmin = false;
  const { isLogin } = useContext(LoginContext);

  const notifyLogin = () => toast.success('Login successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
  });
  const notifyLogout = () => toast.success('Logout successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
  });

  useEffect(()=>{
    isLogin ? notifyLogin(): notifyLogout()
  },[isLogin])

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="App">
        <div className="header">{isAdmin ? <HeaderAdmin /> : <Header />}</div>
        <div className="main-content">
          <Routes>
            {/* This is router for client */}
            <Route path="/" element={<MainPage />} exact />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/product-detail" element={<ProductDetail />} />
            <Route path="policy" element={<Policy />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="not-found" element={<Error />} />

            {/* This is router for admin */}
            <Route path="admin/" element={<Dashboard />} exact />
            <Route path="admin/user" element={<User />} exact />
            <Route path="admin/product" element={<Product />} exact />
          </Routes>
        </div>
        <div className="footer">{isAdmin ? <FooterAdmin /> : <Footer />}</div>
      </div>
    </>
  );
}

export default App;
