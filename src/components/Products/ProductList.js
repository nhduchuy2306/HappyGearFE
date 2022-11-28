import React from "react";
import Banner from "../../pages/Banner/Banner";
import ProductItem from "./ProductItem";
import BannerImg from "../../assets/2abcd1.jpg"
import { useEffect, useState } from 'react'
import axios from "axios";

function ProductList() {

  const [list, setList] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users',
    }).then(respone => setList(respone.data))
  },[])

  console.log(list)

  return (
    <>
      <Banner image={BannerImg} name="Shopping" title="" />
      <section className="py-5 d-flex">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <ProductItem list={list} />          
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductList;
