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
    font-family: 'Roboto Mono', 'DejaVu Sans Mono', Consolas, monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Liberation Mono, "Courier New";
    color: #ffffff;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
