import React from "react";

function ProductItem({ picutreUrl, name, price }) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={picutreUrl} alt="" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>${price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#!">
              View options
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
