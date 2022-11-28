import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ borderBottom: "1px solid #d3d6d8" }}
    >
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/happygear">
          <i className="fa fa-cog mr-5" aria-hidden="true"></i>
          <span style={{ marginLeft:'10px'}}>HappyGear</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/happygear">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/happygear/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/happygear/policy">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <Link
            style={{
              marginRight: "10px",
              textDecoration: "none",
              color: "black",
            }}
            to="/happygear/login"
            type="submit"
          >
            Login
          </Link>
          <Link
            style={{
              marginRight: "10px",
              textDecoration: "none",
              color: "black",
            }}
            to="/happygear/register"
            type="submit"
          >
            Register
          </Link>
          <Link
            className="d-flex"
            to="/happygear/cart"
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
