import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
    font-weight: normal;
    margin: 0;
    letter-spacing: 0.3px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.siteBackground};
  }

  a, button, textarea {
    font-family: 'Roboto', sans-serif;
  }
`;
