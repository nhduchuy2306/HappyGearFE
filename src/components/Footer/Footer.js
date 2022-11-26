import React from "react";
import "./Footer.scss"
import { Link } from "react-router-dom";
import logo from "../../assets/pngwing.com.png";

function Footer() {
  return (
    <>
      <footer className="footer spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__about__logo">
                  <a href="./index.html" style={{textDecoration:'none', color:'black'}}>
                    <img src={logo} alt="" style={{width:'100px'}}/>
                    <span className="" style={{fontSize:'40px'}}>HappyGear</span>
                  </a>
                </div>
                <ul>
                  <li>Address: 60-49 Road 11378 New York</li>
                  <li>Phone: +65 11.188.888</li>
                  <li>Email: hello@colorlib.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
              <div className="footer__widget">
                <h6>Useful Links</h6>
                <ul>
                  <li>
                    <Link to="/prolicy">About Us</Link>
                  </li>
                  <li>
                    <Link to="/products">About Our Shop</Link>
                  </li>
                  <li>
                    <Link to="/prolicy">Secure Shopping</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/prolicy">Who We Are</Link>
                  </li>
                  <li>
                    <Link to="/products">Our Services</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="footer__widget">
                <h6>Contact with us</h6>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <form action="!#">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit" className="site-btn">
                    Subscribe
                  </button>
                </form>
                <div className="footer__widget__social">
                  <a href="!#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="!#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="!#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="!#">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer__copyright text-center">
                <div className="footer__copyright__text">
                  <p>
                    Copyright &copy; All rights reserved 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
