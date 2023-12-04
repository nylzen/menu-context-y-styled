import styled from "styled-components";
import { Navbar } from "../navbar/Navbar";
import Icon from "../Icon/Icon";

const StyledHeader = styled.header`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  height: 100px;
  position: fixed;
  top: 0;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h1>LOGO</h1>
      <Navbar />
      <Icon />
    </StyledHeader>
  );
};
