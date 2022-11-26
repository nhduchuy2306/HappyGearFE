import React from "react";
import "./LatestProduct.scss";
import "./BestSellerProduct.scss";
import ProuducTypeItem from "./ProductType/ProuducTypeItem";

function LatestProduct() {
  return (
    <>
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
            <ProuducTypeItem
              picture="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              productName="Special Item"
              price="20.00"
            />
            <ProuducTypeItem
              picture="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              productName="Special Item"
              price="20.00"
            />
            <ProuducTypeItem
              picture="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              productName="Special Item"
              price="20.00"
            />
            <ProuducTypeItem
              picture="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              productName="Special Item"
              price="20.00"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestProduct;
