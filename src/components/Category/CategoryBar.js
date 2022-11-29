import React, { useState } from "react";
import "./CategoryBar.scss"
import { Link } from 'react-router-dom'
import Img from '../../assets/backgroundCategory.jpg'

function CategoryBar() {

  const [categoryShow, setCategoryShow] = useState(false);

  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="hero__categories">
              <div className="hero__categories__all" onClick={() => setCategoryShow(!categoryShow)}>
                <i className="fa fa-bars"></i>
                <span>All Categories</span>
              </div>
              {categoryShow && 
              <ul>
                <li>
                  <a href="!#">Monitor</a>
                </li>
                <li>
                  <a href="!#">Mouse</a>
                </li>
                <li>
                  <a href="!#">Laptop</a>
                </li>
                <li>
                  <a href="!#">HeadPhone</a>
                </li>
                <li>
                  <a href="!#">MousePads</a>
                </li>
                <li>
                  <a href="!#">PC Items</a>
                </li>
                <li>
                  <a href="!#">PC For Company</a>
                </li>
              </ul>
              }
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hero__search">
              <div className="hero__search__form">
                  <input type="text" placeholder="What do you need?" />
                  <button type="button" className="site-btn">
                    SEARCH
                  </button>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="hero__search__phone__text">
                  <h5>+65 11.188.888</h5>
                  <span>support 24/7 time</span>
                </div>
              </div>
            </div>
            <div className="hero__item set-bg" style={{ backgroundImage: `url('${Img}')` }}>
              <div className="hero__text">
                <span>Happy Gear</span>
                <h2>
                  Gear 100% <br />
                  High Quality
                </h2>
                <h4 className="text-black text-uppercase mb-4">Free Pickup and Delivery Available</h4>
                <Link to="/products" className="btn btn-success">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryBar;
