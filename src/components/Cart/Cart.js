import React, { useState } from "react";
import Banner from "../../pages/Banner/Banner";
import BannerImg from "../../assets/2abcd1.jpg";
import "./Cart.scss";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// const cart = [
//   {
//     quantity: "1",
//     url: "https://www.nguyenkim.com/images/detailed/775/10051123-laptop-asus-vivobook-x515ea-ej1046w-i5-1135g7-1.jpg",
//     name: "Acer",
//     price: "33.00",
//     total: "33.00",
//   },
//   {
//     quantity: "1",
//     url: "https://cdn.tgdd.vn/Products/Images/44/285077/asus-vivobook-15x-oled-a1503za-i3-l1152w-600x600.jpg",
//     name: "Asus",
//     price: "33.00",
//     total: "33.00",
//   },
//   {
//     quantity: "1",
//     url: "https://cdn.tgdd.vn/Products/Images/44/285077/asus-vivobook-15x-oled-a1503za-i3-l1152w-600x600.jpg",
//     name: "Asus",
//     price: "40.00",
//     total: "40.00",
//   },
// ];

function Cart() {

  const [total, setTotal] = useState(0)

  const { cart } = useContext(CartContext)

  const callbackTotal = (totalItem) => {
    console.log(">>>>>>>>>>>>>>>> Total price in cart " + totalItem + total)
    setTotal(parseInt(total + totalItem));
  }

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
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.slice(1).map((data, index) => (
                      <CartItem
                        key={index}
                        productId = {data.productId}
                        quantity={data.quantity}
                        url={data.picture}
                        name={data.productName}
                        price={data.price}
                        callback={callbackTotal}
                      />
                    ))}
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
                    Subtotal <span>{total}</span>
                  </li>
                  <li>
                    Tax <span>10%</span>
                  </li>
                  <li>
                    Total <span>{total * 1.1}</span>
                  </li>
                </ul>
                <Link to="/checkout" className="btn btn-info primary-btn">
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
