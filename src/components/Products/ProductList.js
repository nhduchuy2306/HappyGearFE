import { useEffect, useState, useContext } from "react";
import Banner from "../../pages/Banner/Banner";
import ProductItem from "./ProductItem";
import BannerImg from "../../assets/2abcd1.jpg";
import Filter from "../Filter/Filter";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import productApi from './../../api/productApi';
import { FilterContext } from "../../context/FilterContext";

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

function ProductList() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [search, setSearch] = useState("");

  const { brandId, categoryId, price } = useContext(FilterContext)

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

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

    async function fetchAllProducts() {
      try {
        const response = await productApi.getAllProductWithPage({ p: page - 1 })
        setList(response.data[0]);
        setTotalPage(response.data[1]);
      } catch (error) {
        console.log(error.message);
      }
    }

    async function fetchAllProductsBySearch() {
      try {
        const response = await productApi.getAllByName({ text: search })
        setList(response.data[0]);
        setTotalPage(response.data[1]);
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    if (search !== "") fetchAllProductsBySearch();
    else if (brandId === 0 || categoryId === 0) fetchAllProducts();
    else fetchProduct();
  }, [page, brandId, categoryId, price, search]);

  return (
    <div>
      <Banner image={BannerImg} name="Shopping" title="" />
      <section className="container py-5">
        <div className="row">
          <div
            className="col-md-3"
            style={{
              '& > :not(style)': { m: 1 },
              height: "100vh",
            }}
          >
            <Filter />
          </div>
          <div className="col-md-9">
            <div style={{ width: '100%' }}>
              <Box
                component="form"
                sx={{
                  maxWidth: '100%',
                  margin: 1
                }}
                noValidate
                autoComplete="off"
              >
                <FormControl sx={{ width: '100%', maxWidth: '100%' }}>
                  <InputLabel htmlFor="component-outlined">Search</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    defaultValue={search || ""}
                    label="Product"
                    onChange={handleSearch}
                  />
                </FormControl>
              </Box>
            </div>
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
