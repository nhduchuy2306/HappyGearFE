import React from 'react'
import Banner from '../../pages/Banner/Banner'
import "./Checkout.scss"
import BannerImg from "../../assets/2abcd1.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import axios from 'axios';

function Checkout() {

    const { cart, setCart } = useContext(CartContext);

    const notify = () => toast.success('Order your product successfully!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleOrder = (e) => {
        console.log("click")
        const requestBody = cart.map(item => {
            return {
                "productId": item.productId,
                "quantity": item.quantity,
                "price": item.price
            }
        })

        axios.post('http://localhost:8080/happygear/api/orders/create', {
            "cartItems": requestBody.slice(1),
            "userName": "hongtran" || window.localStorage.getItem("UserLogin")
        })
            .then((response) => {
                if (response.status === 200 && response.data === 'success') {
                    notify()
                    setCart([])
                }
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <Banner image={BannerImg} name="Checkout" title="Checkout" />
            <section className="checkout spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h6><span className="icon_tag_alt"></span> Have a coupon? <a href="!#">Click here</a> to enter your code
                            </h6>
                        </div>
                    </div>
                    <div className="checkout__form">
                        <h4>Billing Details</h4>
                        <form action="!#">
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Fist Name<span>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Last Name<span>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Country<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Address<span>*</span></p>
                                        <input type="text" placeholder="Street Address" className="checkout__input__add" />
                                        <input type="text" placeholder="Apartment, suite, unite ect (optinal)" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Town/City<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Country/State<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Postcode / ZIP<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Phone<span>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label>
                                            Create an account?
                                            <input type="checkbox" id="acc" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <p>Create an account by entering the information below. If you are a returning customer
                                        please login at the top of the page</p>
                                    <div className="checkout__input">
                                        <p>Account Password<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label>
                                            Ship to a different address?
                                            <input type="checkbox" id="diff-acc" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Order notes<span>*</span></p>
                                        <input type="text"
                                            placeholder="Notes about your order, e.g. special notes for delivery." />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4>Your Order</h4>
                                        <div className="checkout__order__products">Products <span>Total</span></div>
                                        <ul>
                                            {cart.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <p style={{
                                                            whiteSpace: "nowrap",
                                                            width: "200px",
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis",
                                                            display: "inline-block",
                                                            fontSize: "16px",
                                                            fontWeight: "bold",
                                                            color: "#6f6f6f",
                                                            lineHeight: "40px"
                                                        }}>{item.productName}</p>
                                                        <span>{Number(item.price) * Number(item.quantity)} Đ</span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <div className="checkout__order__subtotal">Subtotal <span>$750.99</span></div>
                                        <div className="checkout__order__total">Total <span>$750.99</span></div>
                                        <div className="checkout__input__checkbox">
                                            <label>
                                                Create an account?
                                                <input type="checkbox" id="acc-or" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua.</p>
                                        <div className="checkout__input__checkbox">
                                            <label>
                                                Check Payment
                                                <input type="checkbox" id="payment" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label>
                                                Paypal
                                                <input type="checkbox" id="paypal" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <button type="button" onClick={(event) => handleOrder(event)} className="site-btn">PLACE ORDER</button>
                                        <ToastContainer
                                            position="top-right"
                                            autoClose={1000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                            theme="light"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout
