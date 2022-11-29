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
        <td className="shoping__cart__item d-flex align-items-center">
          <img className="img-responsive" style={{marginRight:'40px'}} width="200" src={url} alt="" />
          <h5>{name}</h5>
        </td>
        <td className="shoping__cart__price">${price}</td>
        <td className="shoping__cart__quantity">
          <div className="quantity">
            <div className="pro-qty d-flex align-items-center justify-content-center m-auto">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  parseInt(count) <= 1
                    ? setCount(1)
                    : setCount(parseInt(count) - 1)
                }}
              >
                -
              </span>
              <input type="text" value={count} onChange={handleCountChange} />
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setCount(parseInt(count) + 1)}
              >
                +
              </span>
            </div>
          </div>
        </td>
        <td className="shoping__cart__total">{price*count}</td>
        <td className="" style={{cursor:"pointer"}}>
          <span className="fa fa-times"></span>
        </td>
      </tr>
    </>
  );
}

export default CartItem;
