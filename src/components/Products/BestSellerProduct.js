import React, { useState, useEffect } from "react";
import "./BestSellerProduct.scss";
import ProductItem from "./ProductItem";
import productApi from "../../api/productApi";

function BestSellerProduct() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchBestSellerProduct() {
      const response = await productApi.getBestSeller();
      console.log(response.data)
      setList(response.data)
    }
    fetchBestSellerProduct();
  }, []);

  return (
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
          <ProductItem list={list} number={4} />
        </div>
      </div>
    </section>
  );
}

export default BestSellerProduct;
