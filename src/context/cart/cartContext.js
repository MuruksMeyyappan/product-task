import React, { createContext, useReducer, useContext } from "react";
import { initialState, cartReducer } from "./cartReducer";

const CartContext = createContext();
CartContext.displayName = "CartStore";

export const useCartStore = () => useContext(CartContext);

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
