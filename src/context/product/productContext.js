import React, { createContext, useReducer, useContext } from "react";
import { initialState, productReducer } from "./productReducer";

const ProductContext = createContext();
ProductContext.displayName = "ProductStore";

export const useProductStore = () => useContext(ProductContext);

function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
