import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider, ProductProvider } from "context";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
