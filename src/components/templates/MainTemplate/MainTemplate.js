import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Helmet lang="pl" title="Blog gatsby" />
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default MainTemplate;
