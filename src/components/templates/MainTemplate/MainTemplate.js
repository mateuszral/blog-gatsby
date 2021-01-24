import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

import Navigation from 'components/Navigation/Navigation';

const MainTemplate = ({ children }) => (
  <>
    <Helmet lang="pl" title="Blog gatsby" />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Navigation />
      {children}
    </ThemeProvider>
  </>
);

export default MainTemplate;
