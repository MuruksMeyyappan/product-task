import React from "react";
import { Container } from "./ProductItm.style";
import ProductsItem from "./ProductsItem";
import { useProductStore } from "context";

const Products = () => {
  const [{ products }] = useProductStore();
  return (
    <Container>
      {products.map((product) => {
        return <ProductsItem product={product} />;
      })}
    </Container>
  );
};

export default Products;
