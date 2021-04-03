import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin:0;
    /* adding:0; */
    box-sizing:border-box;
}
html {
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
    }
}
body {
    font-family: Montserrat, sans-serif;
    width: 100%;
    height:100vh;
    background-color:#F1F1F1;
}
`;

export default GlobalStyles;
