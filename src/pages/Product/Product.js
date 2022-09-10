import React from "react";
import {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  ProductDesc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterOption,
  AddContainer,
  Button,
} from "./Product.style";
import Announcement from "components/Announcement";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { useLocation } from "react-router-dom";
import { useCartStore } from "context";
import { addToCart } from "context/cart/cartReducer";

const Product = () => {
  const {
    state: { product },
  } = useLocation();

  const [, dispatch] = useCartStore();

  const addToCard = (product) => {
    dispatch(addToCart(product, 1));
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        {product && (
          <>
            <ImageContainer>
              <Image src={product.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>Party Wear shirt</Title>
              <ProductDesc>
                Shirt has many patterns and mainly used for GOA and tour. Add to
                cart and enjoy the party with party wear :P
              </ProductDesc>
              <Price>Rs: {product.price}</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color :</FilterTitle>
                  <FilterColor color="black"></FilterColor>
                  <FilterColor color="blue"></FilterColor>
                  <FilterColor color="pink"></FilterColor>
                </Filter>

                <Filter>
                  <FilterTitle>{product.variantType.toUpperCase()}</FilterTitle>
                  <FilterSize>
                    {product.variants.map((variant) => (
                      <FilterOption>{variant.toUpperCase()}</FilterOption>
                    ))}
                  </FilterSize>
                </Filter>
              </FilterContainer>

              <AddContainer>
                <Button
                  onClick={() => {
                    addToCard(product);
                  }}
                >
                  Add to Shop List
                </Button>
              </AddContainer>
            </InfoContainer>
          </>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
