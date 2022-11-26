import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/pngwing.com.png";

function Footer() {
  return (
    <>
      <footer className="footer spad border pt-3" style={{backgroundColor: '#f8f9fa',borderTop:"1px solid #d3d6d8"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__about__logo">
                  <a href="/" style={{ width: "50%" , textDecoration:"none"}} className="d-flex w-100 align-items-center">
                    <img className="img-thumbnail" style={{border: "1px solid white", width: "70px"}} src={logo} alt="logo" />
                    <h4>Happy Gear</h4>
                  </a>
                </div>
                <ul>
                  <li><i className="fa fa-address-card"></i> :D1, Long Thanh My, TP Thu Duc, HCM</li>
                  <li><i className="fa fa-phone"></i> : (028) 3 5120 730</li>
                  <li><i className="fa fa-share"></i>: happygear@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1 pt-4">
              <div className="footer__widget">
                <h2>Privacy policy</h2>
                <ul>
                  <li>
                    <Link to="/policy" style={{textDecoration:"none"}}>
                      Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pt-4">
              <div className="footer__widget">
                <h2><i className="fa fa-address-book mr-3"></i> Contact Us</h2>
                <div className="footer__widget__social">
                  <a href="/" className="">
                    <i className="fa fa-facebook" style={{marginRight:"20px"}}></i>
                    <i className="fa fa-instagram" style={{marginRight:"20px"}}></i>
                    <i className="fa fa-twitter"style={{marginRight:"20px"}}></i>
                    <i className="fa fa-google-plus" style={{marginRight:"20px"}}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright">
                <div className="footer__copyright__text text-center">
                  <p>Copyright &copy;2022 All rights reserved</p>
                </div>
                <div className="footer__copyright__payment">
                  <img height={32} src="/assets/img/payment-item.png" alt="" />
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
