import { createGlobalStyle } from "styled-components";
import Oswald1 from "../components/fonts/Oswald/oswald-variablefont_wght-webfont.woff";
import Oswald2 from "../components/fonts/Oswald/oswald-variablefont_wght-webfont.woff2";

export const GlobalStyle = createGlobalStyle`

body {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #D3D3D3;

    &::before {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 25%;
        top: 0;
        background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        z-index: -1;
        opacity: .3;
    }
}

html, body {
    max-width: 100%;
    overflow-x: hidden;
}
@font-face {
        font-family: 'Oswald';
        src: local('Oswald'), local('Oswald'),
        url(${Oswald2}) format('woff2'),
        url(${Oswald1}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

`;


