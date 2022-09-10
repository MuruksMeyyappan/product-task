import React from "react";
import { Info, ItmContainer, Image, Icon, Circle } from "./ProductItm.style";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useHistory } from "react-router-dom";
import { useCartStore } from "context";
import { addToCart } from "context/cart/cartReducer";

const ProductsItem = ({ product }) => {
  let history = useHistory();
  const [, dispatch] = useCartStore();

  const addToCard = (product) => {
    dispatch(addToCart(product, 1));
  };

  return (
    <ItmContainer>
      <Circle />
      <Image src={product.img} />
      <Info>
        <Icon
          onClick={() => {
            // history.push("/cart");
            addToCard(product);
          }}
        >
          <AddShoppingCartIcon />
        </Icon>
        <Icon
          onClick={() => {
            history.push("/product", { product });
          }}
        >
          <SearchIcon />
        </Icon>
      </Info>
    </ItmContainer>
  );
};

export default ProductsItem;
