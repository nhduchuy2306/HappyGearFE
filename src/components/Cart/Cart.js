import React from "react";
import Banner from "../../pages/Banner/Banner";
import BannerImg from "../../assets/2abcd1.jpg";
import "./Cart.scss";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  

  return (
    <>
      <Banner image={BannerImg} name="Shopping Cart" title="Shopping Cart" />
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CartItem 
                        quantity="1"
                        url="img/cart/cart-1.jpg"
                        name="Acer"
                        price="33.00"
                        total="33.00"
                    />
                    <CartItem 
                        quantity="1"
                        url="img/cart/cart-1.jpg"
                        name="Asus"
                        price="33.00"
                        total="33.00"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <Link
                  to="/products"
                  style={{ textDecoration: "none" }}
                  className="btn btn-secondary primary-btn cart-btn"
                >
                  CONTINUE SHOPPING
                </Link>
                <button
                  style={{ textDecoration: "none" }}
                  className="btn btn-secondary primary-btn cart-btn cart-btn-right"
                >
                  Upadate Cart
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__continue">
                <div className="shoping__discount">
                  <h5>Discount Codes</h5>
                  <form action="!#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">
                      APPLY COUPON
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Subtotal <span>$454.98</span>
                  </li>
                  <li>
                    Total <span>$454.98</span>
                  </li>
                </ul>
                <Link to="/happygear/checkout" className="btn btn-info primary-btn">
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
