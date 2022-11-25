import React from "react";
import Banner from "../../pages/Banner/Banner";
import ProductItem from "./ProductItem";
import BannerImg from "../../assets/2abcd1.jpg"

function ProductList() {
  return (
    <>
      <Banner image={BannerImg} name="Shopping" title=""/>
      <section className="py-5 d-flex">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <ProductItem picutreUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" name="Special Item" price="$20.00"/>
            <ProductItem picutreUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" name="Special Item" price="$20.00"/>
            <ProductItem picutreUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" name="Special Item" price="$20.00"/>
            <ProductItem picutreUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" name="Special Item" price="$20.00"/>
            <ProductItem picutreUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" name="Special Item" price="$20.00"/>
            <ProductItem picutreUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" name="Special Item" price="$20.00"/>
            <ProductItem picutreUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" name="Special Item" price="$20.00"/>
            <ProductItem picutreUrl="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" name="Special Item" price="$20.00"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductList;
