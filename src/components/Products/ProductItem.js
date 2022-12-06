import React from "react";

function ProductItem({ list }) {
  return list?.map((e) => (
    <div key={e?.id} className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={e?.image} alt="" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{e?.name}</h5>
            {e?.id}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center d-flex justify-content-between align-items-center">
            <button className="btn btn-outline-dark mt-auto" style={{width:'49%'}} href="#!">
              Details
            </button>
            <button className="btn btn-outline-dark mt-auto" style={{width:'49%'}} href="#!">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default ProductItem;
