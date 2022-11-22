import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">
          <i className="fa fa-cog mr-1" aria-hidden="true"></i>
          HappyGear
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
          </ul>
          <Link className="btn btn-outline-dark mr-2" to="/login" type="submit">
            Login
          </Link>
          <Link className="btn btn-outline-dark mr-2" to="/register" type="submit">
            Register
          </Link>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <i className="fa fa-shopping-cart mr-1" aria-hidden="true"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                0
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
