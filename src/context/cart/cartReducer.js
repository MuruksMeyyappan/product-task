import { clone } from "lodash";
export const UPDATE_CART = "UPDATE_CART";

export const initialState = {
  cart: [],
};

export const addToCart = (product, quantity = 1) => {
  return {
    type: UPDATE_CART,
    product: {
      ...product,
      quantity,
    },
  };
};

export const cartReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case UPDATE_CART:
      let quantity = 0;
      const checkIndex = state.cart.findIndex(
        (product) => product.id === action.product.id
      );

      if (checkIndex === -1) {
        quantity = 1;
        const newState = clone(state);
        return {
          ...newState,
          cart: [...newState.cart, { ...action.product, quantity: quantity }],
        };
      }
      const newState = clone(state);
      newState.cart[checkIndex].quantity += 1;
      return {
        ...newState,
      };
    default:
      break;
  }
};
