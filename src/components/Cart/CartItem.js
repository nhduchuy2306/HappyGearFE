import React, { useState } from "react";
import "./Cart.scss";

function CartItem({ quantity, url, name, price, total }) {
  const [count, setCount] = useState(quantity);

  const handleCountChange = (event) => {
    setCount(event.target.value);
  };

  return (
    <>
      <tr>
        <td className="shoping__cart__item">
          <img src={url} alt="" />
          <h5>{name}</h5>
        </td>
        <td className="shoping__cart__price">${price}</td>
        <td className="shoping__cart__quantity">
          <div className="quantity">
            <div className="pro-qty d-flex align-items-center justify-content-center">
              <button
                className="dec qtybtn btn btn-secondary"
                style={{ width: "50px" }}
                onClick={() => {
                  parseInt(count) <= 1
                    ? setCount(1)
                    : setCount(parseInt(count) - 1)
                }}
              >
                -
              </button>
              <input type="text" value={count} onChange={handleCountChange} />
              <button
                className="inc qtybtn btn btn-secondary"
                style={{ width: "50px" }}
                onClick={() => setCount(parseInt(count) + 1)}
              >
                +
              </button>
            </div>
          </div>
        </td>
        <td className="shoping__cart__total">{total}</td>
        <td className="shoping__cart__item__close">
          <span className="icon_close"></span>
        </td>
      </tr>
    </>
  );
}

export default CartItem;
