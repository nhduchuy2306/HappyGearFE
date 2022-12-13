import { useEffect, useState } from "react";
import Banner from "../../pages/Banner/Banner";
import ProductItem from "./ProductItem";
import BannerImg from "../../assets/2abcd1.jpg";
import axios from "axios";
import Filter from "../Filter/Filter";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function ProductList() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/happygear/api/products/",{
        params:{
          p:page-1
        }
      })
      .then((response) => {
        setList(response.data[0]);
        setTotalPage(response.data[1]);
      })
      .catch((error) => {
        console.log(error);
      });
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
  }, [page]);

  return (
    <>
      <Banner image={BannerImg} name="Shopping" title="" />
      <section className="container py-5">
        <div className="row">
          <div
            className="col-md-3"
            style={{
              height: "100vh",
            }}
          >
            <Filter />
          </div>
          <div className="col-md-9">
            <div>Search bar</div>
            <div className="row">
              <ProductItem list={list} />
            </div>
            <Stack spacing={2} sx={{display: 'flex', alignItems: 'center'}}>
              <Pagination
                count={totalPage}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductList;
