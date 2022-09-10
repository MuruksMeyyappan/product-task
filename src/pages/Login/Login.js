import React from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Link,
  Button,
} from "./Login.style";

const Login = () => {
  let history = useHistory();
  const onLogin = () => {
    history.push("/home");
  };
  const onRegister = () => {
    history.push("/register");
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username"></Input>
          <Input placeholder="Password"></Input>
          <Button onClick={onLogin}>LOG IN</Button>
          <Link>Forget Password</Link>
          <Link onClick={onRegister}>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
