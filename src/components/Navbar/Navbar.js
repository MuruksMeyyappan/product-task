import React from "react";
import {
  Container,
  Wrapper,
  Left,
  SearchContainer,
  Input,
  Center,
  Logo,
  Right,
  ButtonSign,
} from "./Navbar.style";
import SearchIcon from "@mui/icons-material/Search";
import { useHistory } from "react-router-dom";

function Navbar() {
  let history = useHistory();
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon color="secondary" style={{ fontSize: "14px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SHOPPING WORLD</Logo>
        </Center>
        <Right>
          <ButtonSign
            onClick={() => {
              history.push("/cart");
            }}
          >
            Cart
          </ButtonSign>
          <ButtonSign>Login</ButtonSign>
          <ButtonSign>Register</ButtonSign>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
