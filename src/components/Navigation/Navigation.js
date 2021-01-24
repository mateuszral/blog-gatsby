import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { routes } from 'routes';

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled.span`
  font-weight: ${({ theme }) => theme.font.styles.black};
  font-size: ${({ theme }) => theme.font.size.logo};
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavigationListItem = styled.li`
  font-weight: ${({ theme }) => theme.font.styles.bold};
  font-size: ${({ theme }) => theme.font.size.button};
  margin-left: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <StyledLogo>
        <StyledLink to={routes.home}>HATTA</StyledLink>
      </StyledLogo>
      <NavigationList>
        <NavigationListItem>
          <StyledLink to={routes.about}>about</StyledLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledLink to={routes.articles}>articles</StyledLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledLink to={routes.gallery}>gallery</StyledLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledLink to={routes.contact}>contact</StyledLink>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
