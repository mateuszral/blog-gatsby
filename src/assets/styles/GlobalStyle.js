import { createGlobalStyle } from 'styled-components';
import { theme } from 'assets/styles/theme';
import 'vendors/normalize.css';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    padding-top: 80px;

    ${theme.mq.bigTablet} {
      padding-left: 65px;
    }
  }

  h1, h2, h3, h4, h5, span {
    margin: 0;
  }

  button {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;
