import styled from "styled-components";
import MainPicHeader from "./components/MainPicHeader";
import { GlobalStyle } from "./components/GlobalStyle";

function App() {
  return (
    <AppBox>
      <GlobalStyle />
      <MainPicHeader />
    </AppBox>
  );
}

export default App;

export const AppBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
