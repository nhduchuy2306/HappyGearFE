import React, {useState} from "react";
import "../style.scss";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* <!-- Navbar Brand--> */}
        <Link className="navbar-brand ps-3 text-center" to="/">
          <i className="fa fa-user" style={{ marginRight: "10px" }}></i>
          Admin
        </Link>
        <div className="d-flex justify-content-center align-items-center">
          <Link
            className="navbar-brand text-center"
            style={{ pointer: "cursor" }}
            to="/user"
          >
            <i className="fa fa-table" style={{ marginRight: "10px" }}></i>
            User
          </Link>
          <Link
            className="navbar-brand text-center"
            style={{ pointer: "cursor" }}
            to="/product"
          >
            <i className="fa fa-table" style={{ marginRight: "10px" }}></i>
            Product
          </Link>
        </div>

        {/* <!-- Navbar Search--> */}
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
        {/* <!-- Navbar--> */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
              onClick={() => setShow(!show)}
            >
              <i className="fa fa-user fa-fw"></i>
            </span>
            {show && (
              <ul
                style={{ right: "0" }}
                className="dropdown-menu dropdown-menu-end show"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="!#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="!#">
                    Activity Log
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="!#">
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
