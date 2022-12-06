import React from "react";
import "./BestSellerProduct.scss";
import ProductItem from "./ProductItem";

const list = [
  {
    id: 1,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Special Item",
    price: "20.00",
  },
  {
    id: 2,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Special Item",
    price: "20.00",
  },
  {
    id: 3,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Special Item",
    price: "20.00",
  },
  {
    id: 4,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Special Item",
    price: "20.00",
  },
];

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
            <ProductItem list={list} />
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSellerProduct;
