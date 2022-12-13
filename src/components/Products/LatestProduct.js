import React,{ useState, useEffect} from "react";
import "./LatestProduct.scss";
import "./BestSellerProduct.scss";
import ProductItem from "./ProductItem";
import axios from "axios"

// const list = [
//   {
//     productId: 1,
//     picture: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     productName: "Special Item",
//     price: "20.00",
//   },
//   {
//     productId: 2,
//     picture: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     productName: "Special Item",
//     price: "20.00",
//   },
//   {
//     productId: 3,
//     picture: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     productName: "Special Item",
//     price: "20.00",
//   },
//   {
//     productId: 4,
//     picture: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//     productName: "Special Item",
//     price: "20.00",
//   },
// ];

function LatestProduct() {

  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/happygear/api/products/latest")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <ProductItem list={list} number={4} />
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestProduct;
