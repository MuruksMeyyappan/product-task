import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  box-shadow: 0px 0px 0px 2px #888888;
  width: 40%;
  padding: 20px;
  background-color: #fff;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
export const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0;
`;
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  margin: 20px 10px 0 0;
`;
