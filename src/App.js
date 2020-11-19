import React from 'react';
import styled from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
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

`;
