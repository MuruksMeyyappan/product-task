import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
`;

export const Center = styled.div`
  flex: 1;
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonSign = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
