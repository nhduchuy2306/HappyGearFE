import { createContext } from "react";
import { useState } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [brandId, setBrandId] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [price, setPrice] = useState([500000, 200000000]);

  return (
    <FilterContext.Provider
      value={{ brandId, setBrandId, categoryId, setCategoryId, price, setPrice }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext };
export default FilterProvider;
