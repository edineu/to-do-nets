// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #C9E9FB;
    font-family: "Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif;
  }

  h1 {
    color: rgb(0, 87, 118);
    font-family: "Segoe",Tahoma,Helvetica,Arial,sans-serif;
    position: relative;
    font-weight: normal;
    font-size: 4rem;
    line-height: 4.65rem;
    margin: 0;
    margin-bottom: 3.5rem;
    -webkit-font-smoothing: antialiased;
    font-kerning: auto;
}

`;

export default GlobalStyle;
