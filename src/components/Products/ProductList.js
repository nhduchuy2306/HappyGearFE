import Banner from "../../pages/Banner/Banner";
import ProductItem from "./ProductItem";
import BannerImg from "../../assets/2abcd1.jpg"
// import { useEffect, useState } from 'react'
// import axios from "axios";

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
  {
    id: 5,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Special Item",
    price: "20.00",
  },
  {
    id: 6,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Special Item",
    price: "20.00",
  },
  {
    id: 7,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Special Item",
    price: "20.00",
  },
];

function ProductList() {

  // const [list, setList] = useState([])

  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: 'https://jsonplaceholder.typicode.com/users',
  //   }).then(respone => setList(respone.data))
  // },[])

  // console.log(list)

  return (
    <>
      <Banner image={BannerImg} name="Shopping" title="" />
      <section className="py-5 d-flex">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
              <ProductItem list={list} />          
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductList;
