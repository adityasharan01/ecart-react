import { createContext, useContext, useReducer } from "react";
import { productFilterReducer } from "../reducers";

const initialState = {
  sortBy: "",
  rating: 0,
  price: 2000,
  categories: {
    menWatches: false,
    womenWatches: false,
    boyWatches: false,
    girlWatches: false,
  },
  includeOutOfStock: true,
  fastDelivery: false
};

const ProductFilterContext = createContext(initialState);

const useProductFilter = () => useContext(ProductFilterContext);

const ProductFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productFilterReducer, initialState);
  return (
    <ProductFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

export { ProductFilterProvider, useProductFilter };
