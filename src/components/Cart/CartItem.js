import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import formatPrice from './../../services/FormatPrice';

function CartItem({ productId, quantity, url, name, price }) {
  const [count, setCount] = useState(quantity);

  const { cart, setCart } = useContext(CartContext)

  const exist = cart.filter(product => product.productId === productId)

  const handleCountChange = (event) => {
    setCount(event.target.value);
  };

  const handleDelete = (event, id) => {
    notify();
    const item = cart.filter(product => product.productId !== id)

    if (item.length >= 0) {
      setCart([...item])
    }
  }

  const notify = () => toast.success('Remove Successfully!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const handleDecrease = (event) => {
    if (parseInt(count) <= 1) {
      setCount(1);
    }
    else {
      setCount(parseInt(count) - 1);

      if (exist.length > 0) {
        exist[0].quantity = Number(exist[0].quantity) - 1
        setCart(existingItem => [...existingItem])
      }
    }
  }

  const handleIncrease = (event) => {
    setCount(parseInt(count) + 1);

    if (exist.length > 0) {
      exist[0].quantity = Number(exist[0].quantity) + 1
      setCart(existingItem => [...existingItem])
    }
  }

  return (
    <tr>
      <td className="d-flex align-items-center">
        <img className="img-responsive" style={{ marginRight: '40px' }} width="200" src={url} alt="" />
        <h5>{name}</h5>
      </td>
      <td className="shoping__cart__price">{formatPrice.VNDong(price)}</td>
      <td className="shoping__cart__quantity">
        <div className="quantity">
          <div className="pro-qty d-flex align-items-center justify-content-center m-auto">
            <span
              style={{ cursor: "pointer" }}
              onClick={handleDecrease}
            >
              -
            </span>
            <input type="text" value={count} onChange={handleCountChange} />
            <span
              style={{ cursor: "pointer" }}
              onClick={handleIncrease}
            >
              +
            </span>
          </div>
        </div>
      </td>
      <td className="shoping__cart__total">{formatPrice.VNDong(price * count)}</td>
      <td className="" style={{ cursor: "pointer" }}>
        <span className="fa fa-times" onClick={(event) => handleDelete(event, productId)}></span>
      </td>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </tr>
  );
}

export default CartItem;
