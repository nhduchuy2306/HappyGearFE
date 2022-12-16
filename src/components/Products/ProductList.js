import { useEffect, useState, useContext } from "react";
import Banner from "../../pages/Banner/Banner";
import ProductItem from "./ProductItem";
import BannerImg from "../../assets/2abcd1.jpg";
import Filter from "../Filter/Filter";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import productApi from './../../api/productApi';
import { FilterContext } from "../../context/FilterContext";

function ProductList() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  const { brandId, categoryId, price } = useContext(FilterContext)

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await productApi.getProductWithPage({ p: page - 1, b: brandId, c: categoryId, f: price[0], t: price[1] })
        setList(response.data[0]);
        setTotalPage(response.data[1]);
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchProduct();
  }, [page, brandId, categoryId, price]);

  return (
    <div>
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
            <Stack spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <Pagination
                count={totalPage || 1}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
