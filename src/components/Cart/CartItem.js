import React, { useState } from "react";
import "./Cart.scss";

function CartItem({ quantity, url, name, price, total, callback }) {
  const [count, setCount] = useState(quantity);

  const handleCountChange = (event) => {
    setCount(event.target.value);
  };

  const handleDelete = () => {
    console.log("click");
  }

  return (
    <>
      <tr>
        <td className="d-flex align-items-center">
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
                  if(parseInt(count) <= 1){
                    setCount(1);
                    callback(1*price);
                  }
                  else{
                    setCount(parseInt(count)-1);
                    callback((parseInt(count)-1)*price);
                  }
                }}
              >
                -
              </span>
              <input type="text" value={count} onChange={handleCountChange} />
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCount(parseInt(count) + 1);
                  callback((parseInt(count) + 1)*price);
                }}
              >
                +
              </span>
            </div>
          </div>
        </td>
        <td className="shoping__cart__total">{price*count}</td>
        <td className="" style={{cursor:"pointer"}}>
          <span className="fa fa-times" onClick={handleDelete}></span>
        </td>
      </tr>
    </>
  );
}

export default CartItem;
