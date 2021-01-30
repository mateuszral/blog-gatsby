import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import slugify from 'slugify';
import { graphql } from 'gatsby';

import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

import ArticlePreview from 'components/molecules/ArticlePreview/ArticlePreview';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const StyledParagraph = styled(Paragraph)`
  width: 100%;

  ${({ theme }) => theme.mq.bigTablet} {
    width: 25%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.layout.mobileSidesPadding};

  ${({ theme }) => theme.mq.bigTablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    padding: 0 65px 0 0;
    min-height: calc(100vh - 80px);
  }
`;

const ArticlesPage = ({
  data: {
    allDatoCmsArticle: { nodes },
  },
}) => (
  <StyledWrapper>
    <Header>articles</Header>
    <StyledParagraph>
      While artists work from real to the abstract, architects must work from the abstract to the
      real.
    </StyledParagraph>
    <ContentWrapper>
      {nodes.map(({ title, featuredImage: { fluid }, meta: { updatedAt } }) => (
        <ArticlePreview
          key={title}
          title={title}
          image={fluid}
          slug={slugify(title, { lower: true })}
          updatedAt={updatedAt}
        />
      ))}
    </ContentWrapper>
  </StyledWrapper>
);

ArticlesPage.propTypes = {
  data: PropTypes.shape({
    allDatoCmsArticle: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          featuredImage: PropTypes.shape({
            fluid: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
              .isRequired,
          }).isRequired,
          meta: PropTypes.shape({
            updatedAt: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        author
        meta {
          updatedAt(formatString: "DD/MM/YYYY")
        }
        featuredImage {
          fluid(maxWidth: 390, maxHeight: 240) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default ArticlesPage;
