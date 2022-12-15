import React, { useState, useEffect } from "react";
import "./LatestProduct.scss";
import "./BestSellerProduct.scss";
import ProductItem from "./ProductItem";
import productApi from "../../api/productApi";

function LatestProduct() {

  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchLatestProduct() {
      const response = await productApi.getLatest();
      setList(response.data);
    }
    fetchLatestProduct();
  }, []);

  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Latest Product</h2>
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

export default LatestProduct;
