import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import axios from "axios";

function Filter() {
  const [value, setValue] = useState([0, 20000000]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState();
  const [selectedBrandIndex, setSelectedBrandIndex] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/happygear/api/categories")
      .then((response) => {
        setCategory([...response.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/happygear/api/brands")
      .then((response) => {
        setBrand([...response.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClickCategory = (event,index,id) => {
    setSelectedCategoryIndex(index)
    console.log(">>> category "+id)
  }

  const handleClickBrand = (event,index,id) => {
    setSelectedBrandIndex(index)
    console.log(">>> brand "+id)
  }

  return (
    <>
      <div>
        <h4 style={{ fontWeight: "bold" }}>Category:</h4>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              {category.map((c,index) => {
                return (
                  <ListItem key={c?.categoryId} disablePadding>
                    <ListItemButton 
                      selected={selectedCategoryIndex === index}
                      onClick={(event) => handleClickCategory(event,index,c?.categoryId)}>
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
              {brand.map((b,index) => {
                return (
                  <ListItem key={b?.brandId} disablePadding>
                    <ListItemButton 
                      selected={selectedBrandIndex === index}
                      onClick={(event) => handleClickBrand(event,index,b?.brandId)}>
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
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            color="primary"
            min={0}
            step={500000}
            max={20000000}
          />
        </Box>
        <div>
          <p style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>
            <span>{value[0]} VNĐ</span> - <span>{value[1]} VNĐ</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Filter;
