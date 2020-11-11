import styled from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import MainPicHeader from "./components/MainPicHeader";
import MainBG from "./components/MainBg";

function App() {
  return (
    <AppBox>
      <GlobalStyle />
      <MainBG />
    </AppBox>
  );
}

export default App;

export const AppBox = styled.div`
  /* display: flex; */
  /* flex-direction: column;
  justify-content: center;
  align-items: center; */
  background-color: lightgray;
`;
