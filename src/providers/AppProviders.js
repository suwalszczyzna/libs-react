import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/theme';
import { GlobalStyles } from 'assets/GlobalStyles';

export const AppProviders = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
