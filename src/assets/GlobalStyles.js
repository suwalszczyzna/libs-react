import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
    font-weight: normal;
  }

  p {
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;

  }

  a, button, textarea {
    font-family: 'Roboto', sans-serif;
  }
`;
