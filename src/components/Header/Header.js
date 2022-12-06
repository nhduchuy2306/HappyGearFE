import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

function Header() {
  const [headerShow, setHeaderShow] = useState(false);
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ borderBottom: "1px solid #d3d6d8", padding: "15px" }}
    >
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">
          <i className="fa fa-cog mr-5" aria-hidden="true"></i>
          <span style={{ marginLeft: "10px" }}>HappyGear</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick={() => setHeaderShow(!headerShow)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            headerShow
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
          id="navbarContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/policy">
                Privacy Policy
              </Link>
            </li>
          </ul>
          {!isLogin && (
            <Link
              style={{
                marginRight: "10px",
                textDecoration: "none",
                color: "black",
              }}
              to="/login"
            >
              Login
            </Link>
          )}
          {!isLogin && (
            <Link
              style={{
                marginRight: "10px",
                textDecoration: "none",
                color: "black",
              }}
              to="/register"
            >
              Register
            </Link>
          )}
          {isLogin && (
            <button
              style={{
                marginRight: "10px",
                textDecoration: "none",
                color: "black",
                border: "none",
                backgroundColor: "#f8f9fa"
              }}
              onClick={()=> {
                setIsLogin(false)
                sessionStorage.removeItem("UserLogin")
                setTimeout(() =>{
                  navigate("/");
                },1000)
              }}
            >
              Logout
            </button>
          )}
          <Link
            className="d-flex"
            to="/cart"
            style={{ textDecoration: "none" }}
          >
            <button className="btn btn-outline-dark" type="submit">
              <i
                className="fa fa-shopping-cart"
                style={{ marginRight: "10px" }}
                aria-hidden="true"
              ></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                0
              </span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
