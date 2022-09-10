import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Reddit,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import {
  Container,
  Left,
  Logo,
  Decs,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItm,
  Right,
  ContactItm,
} from "./Footer.style";
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOPPING WORLD</Logo>
        <Decs>
          Welcome to Shopping World Kindly follow below social media for new
          Updates
        </Decs>
        <SocialContainer>
          <SocialIcon bg="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon bg="E60023">
            <Reddit />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Link</Title>
        <List>
          <ListItm>Home</ListItm>
          <ListItm>Cart</ListItm>
          <ListItm>Man Fashion</ListItm>
          <ListItm>Woman Fashion</ListItm>
          <ListItm>Accessories</ListItm>
          <ListItm>My Account</ListItm>
          <ListItm>Order Tracking</ListItm>
          <ListItm>My Wishlist</ListItm>
          <ListItm>Terms and Condition</ListItm>
        </List>
      </Center>
      <Right>
        <Title>Contact Details</Title>
        <ContactItm>
          <Room style={{ marginRight: "7px" }} /> A&M Inc, India
        </ContactItm>
        <ContactItm>
          <Phone style={{ marginRight: "7px" }} /> +91 1478523690
        </ContactItm>
        <ContactItm>
          <Mail style={{ marginRight: "7px" }} /> A&M_INC@buddy.dev
        </ContactItm>
      </Right>
    </Container>
  );
};

export default Footer;
