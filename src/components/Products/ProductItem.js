import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import formatPrice from "../../services/FormatPrice";

function ProductItem({ list, number }) {
  const navigate = useNavigate();

  const { cart, setCart } = useContext(CartContext)

  const notify = () => toast.success('Add To Cart Successfully!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const handleAddToCart = (event, item) => {
    const newItem = {
      productId: item.productId,
      picture: item.picture,
      productName: item.productName,
      price: item.price,
      quantity: 1
    }

    const exist = cart.filter(product => product.productId === item.productId)

    if (exist.length > 0) {
      exist[0].quantity = Number(exist[0].quantity) + 1
      setCart(existingItem => [...existingItem])
    }
    else {
      setCart(existingItem => [...existingItem, newItem])
    }

    notify()
  }

  return list?.map((e) => (
    <div
      key={e?.productId}
      className={number === 4 ? "col-md-3 mb-5" : "col-md-4 mb-5"}
    >
      <div className="card h-100">
        <img className="card-img-top" src={e?.picture} alt="" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{e?.productName}</h5>
          </div>
        </div>
        <div className="text-end" style={{ margin: "0 10px 10px 0", color: "red" }}>
          <h5 className="fw-bolder">{formatPrice.VNDong(e?.price)}</h5>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center d-flex justify-content-between align-items-center">
            <button
              className="btn btn-outline-dark mt-auto"
              style={{ width: "49%" }}
              onClick={() =>
                navigate(`/products/product-detail/${e?.productId}`)
              }
            >
              Details
            </button>
            <button
              className="btn btn-outline-dark mt-auto"
              style={{ width: "49%" }}
              onClick={(event) => handleAddToCart(event, e)}
            >
              Add to Cart
            </button>
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
          </div>
        </div>
      </div>
    </div>
  ));
}

export default ProductItem;
