import { Add, Remove } from "@mui/icons-material";
import React, { useMemo } from "react";
import Announcement from "components/Announcement";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { useCartStore } from "context";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopTitles,
  TopText,
  Bottom,
  Info,
  Product,
  ProductDetails,
  Image,
  Details,
  ProductName,
  ProductID,
  ProductColor,
  ProductSize,
  PriceDetails,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  HRline,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemTxt,
  SummaryPrice,
  Button,
  FilterSize,
  FilterOption,
  IncrementButton,
} from "./Cart.style";

const Cart = () => {
  const [{ cart }] = useCartStore();

  const totalPrice = useMemo(
    () =>
      cart?.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0),
    [cart]
  );
  const totalShipment = useMemo(
    () =>
      cart?.reduce((accumulator, item) => {
        return accumulator + item.shippingAmount;
      }, 0),
    [cart]
  );
  const totalShipmentDiscount = useMemo(
    () =>
      cart?.reduce((accumulator, item) => {
        return accumulator + item.shippingDiscount;
      }, 0),
    [cart]
  );

  return (
    <div>
      <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <Title>YOUR BAG ITEM</Title>
          <Top>
            <TopTitles>
              <TopText>Shopping Bag({cart.length})</TopText>
            </TopTitles>
          </Top>
          <Bottom>
            <Info>
              {cart.map((item) => {
                return (
                  <>
                    <HRline />
                    <Product>
                      <ProductDetails>
                        <Image src={item.img} />
                        <Details>
                          <ProductName>
                            <b>Product :&nbsp;</b> BAG
                          </ProductName>
                          <ProductID>
                            <b>ID : </b>
                            {item.id}
                          </ProductID>
                          <ProductColor color="gray" />
                          <ProductSize>
                            <b>{item.variantType?.toUpperCase()} :&nbsp;</b>

                            <FilterSize>
                              {item.variants.map((variant) => (
                                <FilterOption>
                                  {variant.toUpperCase()}
                                </FilterOption>
                              ))}
                            </FilterSize>
                          </ProductSize>
                        </Details>
                      </ProductDetails>
                      <PriceDetails>
                        <ProductAmountContainer>
                          <IncrementButton>
                            <Add />
                          </IncrementButton>
                          <ProductAmount> {item.quantity} </ProductAmount>
                          <IncrementButton>
                            <Remove />
                          </IncrementButton>
                        </ProductAmountContainer>
                        <ProductPrice> Rs: {item.price}</ProductPrice>
                      </PriceDetails>
                    </Product>
                  </>
                );
              })}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemTxt>Subtotal</SummaryItemTxt>
                <SummaryPrice>Rs: {totalPrice}</SummaryPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemTxt>Shipping Amount</SummaryItemTxt>
                <SummaryPrice>Rs: {totalShipment}</SummaryPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemTxt>Shipping Discount</SummaryItemTxt>
                <SummaryPrice>- Rs: {totalShipmentDiscount}</SummaryPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemTxt>Total</SummaryItemTxt>
                <SummaryPrice>
                  Rs:&nbsp;
                  {totalPrice + totalShipment - totalShipmentDiscount}
                </SummaryPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    </div>
  );
};

export default Cart;
