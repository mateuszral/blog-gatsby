import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Header from 'components/Header/Header';
import Paragraph from 'components/Paragraph/Paragraph';

const aboutText =
  'Architectural design is primarily driven by the holistically creative manipulation of mass, space, volume, texture, light, shadow, materials, program, and Realistic elements such as cost, construction and technology, in order to achieve an end which is aesthetic, functional and often artistic. This distinguishes Architecture from engineering design, which is usually driven primarily by the creative application of mathematical and scientific principles.';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr 3fr;
  max-height: 150vh;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    position: relative;
    padding-left: 60px;
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
    padding: 0 0 0 25px;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }
`;

const ParagraphWrapper = styled.div`
  ${({ theme }) => theme.mq.bigTablet} {
    position: relative;
    padding-top: 20px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: -100px;
      width: calc(100% + 100px);
      height: 4px;
      background-color: ${({ theme }) => theme.black};
    }

    &::before {
      top: 10px;
    }

    &::after {
      bottom: -10px;
    }
  }
`;
const StyledParagraph = styled(Paragraph)`
  padding: 0 50px;
  font-weight: ${({ theme, bold }) => (bold ? theme.font.styles.bold : theme.font.styles.regular)};

  ${({ theme }) => theme.mq.bigTablet} {
    padding: 0;
    width: 80%;
    line-height: 1.6;
  }
`;

const StyledImg = styled(Img)`
  top: 20px;

  ${({ theme }) => theme.mq.tablet} {
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: ${({ theme }) => theme.zIndex.level2};
    object-fit: cover;
  }
`;

const AboutPage = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <StyledWrapper>
    <ContentWrapper>
      <Header>about</Header>
      <ParagraphWrapper>
        <StyledParagraph>{aboutText}</StyledParagraph>
        <StyledParagraph bold>Abigail Donutdough</StyledParagraph>
      </ParagraphWrapper>
    </ContentWrapper>
    <StyledImg fluid={fluid} />
  </StyledWrapper>
);

AboutPage.propTypes = {
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
    file(name: { eq: "abigail" }) {
      childImageSharp {
        fluid(maxWidth: 2500, maxHeight: 2500, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
