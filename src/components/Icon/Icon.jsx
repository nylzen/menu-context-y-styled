import { useContext } from "react";
import styled from "styled-components";
import { MenuContext } from "../../context/Context";

const IconContainer = styled.div`
  display: none;
  color: white;
  height: 2.2rem;
  width: 2.2rem;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 992px) {
    display: flex;
  }
`;

const IconBars = styled.span`
  position: relative;
  background-color: ${(props) => (props.$clicked ? "transparent" : "white")};
  width: 75%;
  height: 1.3px;

  transition: all 0.3s;
  &::before,
  &::after {
    background-color: white;
    content: "";
    width: 100%;
    height: 1.3px;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.$clicked ? "0" : "-0.5rem")};
    transform: ${(props) =>
      props.$clicked === true ? "rotate(135deg)" : "rotate(0)"};
  }
  &::after {
    top: ${(props) => (props.$clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.$clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const Icon = () => {
  const ctx = useContext(MenuContext);

  return (
    <IconContainer onClick={ctx.toggleMenu}>
      <IconBars $clicked={ctx.isMenuOpen} />
    </IconContainer>
  );
};

export default Icon;
