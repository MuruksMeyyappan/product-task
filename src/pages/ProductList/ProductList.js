import React from "react";
import Announcement from "components/Announcement";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Products from "components/Products/Products";
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Options,
} from "./ProductList.style";

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product</FilterText>
          <Select>
            <Options disabled selected>
              Color
            </Options>
            <Options>White</Options>
            <Options>Black</Options>
            <Options>Red</Options>
            <Options>Blue</Options>
            <Options>Yellow</Options>
            <Options>Pink</Options>
          </Select>
          <Select>
            <Options disabled selected>
              Size
            </Options>
            <Options>XS</Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
            <Options>XXL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filter Sort</FilterText>
          <Select>
            <Options selected>Newest</Options>
            <Options>Price (asc)</Options>
            <Options>Price (desc)</Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
