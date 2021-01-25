import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Hamburger from 'components/Hamburger/Hamburger';

import { routes } from 'routes';

const NavigationWrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.level1};

  ${({ theme }) => theme.mq.bigTablet} {
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledLogo = styled.span`
  font-weight: ${({ theme }) => theme.font.styles.black};
  font-size: ${({ theme }) => theme.font.size.logo};
`;

const NavigationList = styled.ul`
  width: 100%;
  height: 100vh;
  list-style: none;
  transform: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'translateX(0%)' : 'translateX(100%)')};
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  ${({ theme }) => theme.mq.bigTablet} {
    transform: none;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    height: initial;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const NavigationListItem = styled.li`
  font-weight: ${({ theme }) => theme.font.styles.semiBold};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  margin: 20px 0;

  ${({ theme }) => theme.mq.bigTablet} {
    margin-left: 40px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <NavigationWrapper>
      <NavigationList isMobileMenuOpen={isMobileMenuOpen}>
        <StyledLogo>
          <StyledLink onClick={() => setIsMobileMenuOpen(false)} to={routes.home}>
            HATTA
          </StyledLink>
        </StyledLogo>
        <NavigationListItem>
          <StyledLink onClick={() => setIsMobileMenuOpen(false)} to={routes.about}>
            about
          </StyledLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledLink onClick={() => setIsMobileMenuOpen(false)} to={routes.articles}>
            articles
          </StyledLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledLink onClick={() => setIsMobileMenuOpen(false)} to={routes.gallery}>
            gallery
          </StyledLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledLink onClick={() => setIsMobileMenuOpen(false)} to={routes.contact}>
            contact
          </StyledLink>
        </NavigationListItem>
      </NavigationList>
      <Hamburger handleLinkClick={handleLinkClick} isMobileMenuOpen={isMobileMenuOpen} />
    </NavigationWrapper>
  );
};

export default Navigation;
