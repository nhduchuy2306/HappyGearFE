import React from "react";
import { useNavigate } from "react-router-dom";

function ProductItem({ list, number }) {
  const navigate = useNavigate();

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
        <div className="text-end" style={{margin: "0 10px 10px 0", color: "red"}}>
          <h5 className="fw-bolder">{e?.price} VNĐ</h5>
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
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default ProductItem;
