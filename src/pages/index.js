import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Button from 'components/atoms/Button/Button';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import PageInfo from '../components/molecules/PageInfo/PageInfo';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  height: 150vh;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 2fr;
    height: calc(100vh - 80px);
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
    padding-right: 45px;
    justify-content: center;
    align-items: flex-end;
  }
`;

const StyledImg = styled(Img)`
  top: 20px;

  ${({ theme }) => theme.mq.tablet} {
    top: -80px;
    height: calc(100% + 80px);
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
      <PageInfo title="Your new space" homepage />
      <Button>estimate project</Button>
    </ContentWrapper>
    <StyledImg fluid={fluid} />
  </StyledWrapper>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
          .isRequired,
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
