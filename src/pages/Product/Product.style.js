import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
export const ImageContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
export const Title = styled.h1`
  font-weight: 200;
`;
export const ProductDesc = styled.div`
  margin: 20px 0;
`;
export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterTitle = styled.span`
  font-weight: 300;
  font-size: 20px;
`;
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
export const FilterOption = styled.option``;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;

export const Button = styled.button`
  border: 2px solid teal;
  padding: 15px;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    background-color: #f8f4f4;
  }
`;
