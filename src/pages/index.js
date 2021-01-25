import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Button from 'components/Button/Button';

const StyledWrapper = styled.div`
  width: 100%;
  /* height: calc(200vh - 100px); */
  display: grid;
  grid-template-rows: 1fr 2fr;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledHeading = styled.h1`
  font-size: 60px;
  width: 100%;
  text-align: center;
`;

const StyledParagraph = styled.p`
  padding: 0 50px;
  margin: 20px 0 40px;
  width: 100%;
  text-align: center;
`;

const StyledImg = styled(Img)`
  /* position: absolute !important; */
  top: 20px;
  right: 0;
  /* display: none; */
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({ theme }) => theme.mq.bigTablet} {
    display: block;
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
