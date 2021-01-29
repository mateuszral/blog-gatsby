import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr 3fr;
  max-height: 150vh;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    max-height: calc(100vh - 80px);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ theme }) => theme.mq.bigTablet} {
    margin-top: -80px;
    height: 100%;
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
  ${({ theme }) => theme.mq.bigTablet} {
    width: 80%;
    line-height: 1.6;
  }
`;

const StyledImg = styled(Img)`
  top: 20px;

  ${({ theme }) => theme.mq.tablet} {
    top: -80px;
    height: 100vh;
    z-index: ${({ theme }) => theme.zIndex.level2};
  }
`;

const AboutPage = ({
  data: {
    datoCmsAbout: {
      paragraphContent,
      authorContent,
      image: { fluid },
    },
  },
}) => (
  <StyledWrapper>
    <ContentWrapper>
      <Header>about</Header>
      <ParagraphWrapper>
        <StyledParagraph>{paragraphContent}</StyledParagraph>
        <StyledParagraph bold>{authorContent}</StyledParagraph>
      </ParagraphWrapper>
    </ContentWrapper>
    <StyledImg fluid={fluid} />
  </StyledWrapper>
);

AboutPage.propTypes = {
  data: PropTypes.shape({
    datoCmsAbout: PropTypes.shape({
      paragraphContent: PropTypes.string.isRequired,
      authorContent: PropTypes.string.isRequired,
      image: PropTypes.shape({
        fluid: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
          .isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    datoCmsAbout {
      paragraphContent
      authorContent
      image {
        fluid(maxWidth: 2500, maxHeight: 1200) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
