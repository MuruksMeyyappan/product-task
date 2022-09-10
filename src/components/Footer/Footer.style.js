import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  flex-direction: column;
`;

export const Logo = styled.h1``;
export const Decs = styled.div`
  margin: 20px 0;
`;
export const SocialContainer = styled.div`
  display: flex;
`;
export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  color: #fff;
  border-radius: 50%;
  background-color: #${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
export const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const ListItm = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;
export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ContactItm = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
