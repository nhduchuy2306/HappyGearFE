import React from "react";
import "./BestSellerProduct.scss";
import ProductItem from "./ProductItem";

function BestSellerProduct() {
  return (
    <>
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Best Seller Product</h2>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            <ProductItem
              picutreUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              name="Special Item"
              price="20.00"
            />
            <ProductItem
              picutreUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              name="Special Item"
              price="20.00"
            />
            <ProductItem
              picutreUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              name="Special Item"
              price="20.00"
            />
            <ProductItem
              picutreUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              name="Special Item"
              price="20.00"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSellerProduct;
