import PopularProducts from "../../mockData/PopularProducts.json";

export const initialState = {
  products: [...PopularProducts],
};

export const productReducer = (state = initialState, action) => {
  return {
    ...state,
  };
};
