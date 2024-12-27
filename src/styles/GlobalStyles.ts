import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #8c6144;
    --background-color: #0c0c0c;
    --text-color: #999999;
    --white-color: #ffffff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    height: 100%;
    width: 100%;
    color: var(--text-color);
    background-color: var(--background-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .hidden {
    opacity: 0;
  }

  .hidden-ball {
    cursor: none;
  }

  .light-content {
    color: var(--white-color);
  }
`;