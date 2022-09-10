import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from "./Register.style";
import useInputHook from "hooks/useInputHook";
import axios from "axios";

const Register = () => {
  const [name, setName, resetName] = useInputHook("");
  const [lastName, setLastName, resetLastName] = useInputHook("");
  const [email, setEmail, resetEmail] = useInputHook("");
  const [userName, setUserName, resetUserName] = useInputHook("");
  const [password, setPassword, resetPassword] = useInputHook("");
  const [confirmPassword, setConfirmPassword, resetConfirmPassword] =
    useInputHook("");
  // let history = useHistory();
  const onRegister = (e) => {
    e.preventDefault();
    console.log("#123 name", name);
    console.log("#123 lastName", lastName);
    console.log("#123 email", email);
    console.log("#123 userName", userName);
    console.log("#123 password", password);
    console.log("#123 confirmPassword", confirmPassword);

    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== "" &&
      email !== "" &&
      userName !== "" &&
      email !== "" &&
      name !== "" &&
      lastName !== ""
    ) {
      console.log("yes");
      const inputRequest = {
        name: name,
        lastName: lastName,
        email: email,
        userName: userName,
        password: password,
        confirmPassword: confirmPassword,
      };
      axios
        .post("http://localhost:5000/api/v1/register", inputRequest)
        .then((response) => console.log("#123 response", response))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    } else {
      console.log("no");
    }
  };
  const onReset = (e) => {
    e.preventDefault();
    resetName();
    resetLastName();
    resetEmail();
    resetUserName();
    resetPassword();
    resetConfirmPassword();
  };
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="Name" id="name" {...setName}></Input>
          <Input placeholder="Last Name" id="lastName" {...setLastName}></Input>
          <Input placeholder="Email" id="email" {...setEmail}></Input>
          <Input placeholder="Username" id="userName" {...setUserName}></Input>
          <Input
            type="password"
            placeholder="Password"
            id="password"
            {...setPassword}
            required
          ></Input>
          <Input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            {...setConfirmPassword}
            required
          ></Input>
          <Agreement>
            By creating an account, I consent to the processing my data in
            accordance with <b>Terms and condition</b>
          </Agreement>
          <Button onClick={onRegister}>Create Account</Button>
          <Button onClick={onReset}>Reset</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
