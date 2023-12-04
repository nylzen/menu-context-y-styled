import styled from "styled-components";
import { Header } from "./components/header/Header";
import { GlobalStyles } from "./styles/GlobalStyles";

// Sección creada únicamente para mostrar que en scroll también funciona el menú como corresponde.
const ScrollSection = styled.section`
  height: 200vh;
  background-color: #515151;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ScrollSection />
    </>
  );
}

export default App;
