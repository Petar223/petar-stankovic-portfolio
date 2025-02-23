import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100vh;
    // overflow: hidden;
    font-family: 'Orbitron', sans-serif;
    color: #ffffff;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
