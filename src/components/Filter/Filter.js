import React, { useEffect, useState, useContext } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import axios from "axios";
import { FilterContext } from "../../context/FilterContext";
import formatPrice from './../../services/FormatPrice';

function Filter() {

  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(0);

  const { setBrandId, setCategoryId, price, setPrice } = useContext(FilterContext)

  const handleChange = (event, newValue) => {
    setPrice(newValue)
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/happygear/api/categories")
      .then((response) => {
        setCategory([...response.data]);
      })
      .catch((err) => console.log(err));
  }, [category]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/happygear/api/brands")
      .then((response) => {
        setBrand([...response.data]);
      })
      .catch((err) => console.log(err));
  }, [brand]);

  const handleClickCategory = (event, index, id) => {
    setSelectedCategoryIndex(index)
    if(index === 0) setCategoryId(index)
    else setCategoryId(id)
  }

  const handleClickBrand = (event, index, id) => {
    setSelectedBrandIndex(index)
    if(index === 0) setBrandId(index)
    else setBrandId(id)
  }

  return (
    <div>
      <div>
        <h4 style={{ fontWeight: "bold" }}>Category:</h4>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  selected={selectedCategoryIndex === 0}
                  onClick={(event) => handleClickCategory(event, 0, 0)}>
                  All
                </ListItemButton>
              </ListItem>
              {category.map((c, index) => {
                return (
                  <ListItem key={c?.categoryId} disablePadding>
                    <ListItemButton
                      selected={selectedCategoryIndex === index+1}
                      onClick={(event) => handleClickCategory(event, index+1, c?.categoryId)}>
                      {c?.categoryName}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </nav>
        </Box>
      </div>
      <div>
        <h4 style={{ fontWeight: "bold" }}>Brand:</h4>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  selected={selectedBrandIndex === 0}
                  onClick={(event) => handleClickBrand(event, 0, 0)}>
                  All
                </ListItemButton>
              </ListItem>
              {brand.map((b, index) => {
                return (
                  <ListItem key={b?.brandId} disablePadding>
                    <ListItemButton
                      selected={selectedBrandIndex === index+1}
                      onClick={(event) => handleClickBrand(event, index+1, b?.brandId)}>
                      {b?.brandName}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </nav>
        </Box>
      </div>
      <div>
        <h4 style={{ fontWeight: "bold" }}>Price:</h4>
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={price}
            onChange={handleChange}
            valueLabelDisplay="auto"
            color="primary"
            min={500000}
            step={1000000}
            max={200000000}
          />
        </Box>
        <div>
          <p style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>
            <span>{formatPrice.VNDong(price[0])}</span> - <span>{formatPrice.VNDong(price[1])}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
