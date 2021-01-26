import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import { GlobalStyle, GlobalStyleHome } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

import Navigation from 'components/Navigation/Navigation';

import { routes } from 'routes';

const MainTemplate = ({ children, location }) => {
  const homepageOrAbout = location.pathname === routes.home || location.pathname === routes.about;
  return (
    <>
      <Helmet lang="pl" title="Blog gatsby" />
      {homepageOrAbout ? (
        <GlobalStyleHome />
      ) : (
        <>
          <GlobalStyleHome />
          <GlobalStyle />
        </>
      )}
      <ThemeProvider theme={theme}>
        <Navigation />
        {children}
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainTemplate;
