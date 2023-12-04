import styled from "styled-components";
import { MenuContext } from "../../context/Context";
import { useContext } from "react";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 992px) {
    transform: ${(props) =>
      props.$clicked ? "translateX(0)" : "translateX(100%)"};
    transition: all 0.5s;
    position: absolute;
    top: 100px;
    right: 0;
    background-color: black;
    width: 50%;
    padding: 50px 0;
  }
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const StyledListItem = styled.li`
  color: white;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff8c00;
  }
`;

export const Navbar = () => {
  const ctx = useContext(MenuContext);
  return (
    <StyledNavbar $clicked={ctx.isMenuOpen}>
      <StyledList>
        <StyledListItem>Home</StyledListItem>
        <StyledListItem>About</StyledListItem>
        <StyledListItem>Services</StyledListItem>
      </StyledList>
    </StyledNavbar>
  );
};
