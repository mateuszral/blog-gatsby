import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import Paragraph from 'components/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  max-height: 150vh;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 2fr;
    position: relative;
  }
`;

const ContentWrapper = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ theme }) => theme.mq.bigTablet} {
    padding: 0 25px 0 0;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
  }
`;

const StyledHeading = styled(Header)`
  ${({ theme }) => theme.mq.bigTablet} {
    align-items: flex-end;
    font-size: ${({ theme }) => theme.font.size.bigHeader};
    width: 45%;
    line-height: 0.9;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 20px 0 40px;

  ${({ theme }) => theme.mq.bigTablet} {
    width: 30%;
  }
`;

const StyledImg = styled(Img)`
  top: 20px;

  ${({ theme }) => theme.mq.tablet} {
    top: 0;
    height: 100vh;
    z-index: ${({ theme }) => theme.zIndex.level2};
  }
`;

const IndexPage = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <StyledWrapper>
    <ContentWrapper>
      <StyledHeading>Your new space</StyledHeading>
      <StyledParagraph>While artists work from real to the abstract, architects must work from the abstract to the real.</StyledParagraph>
      <Button>estimate project</Button>
    </ContentWrapper>
    <StyledImg fluid={fluid} />
  </StyledWrapper>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
