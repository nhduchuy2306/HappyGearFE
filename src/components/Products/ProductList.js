import React from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
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
