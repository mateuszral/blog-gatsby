import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.layout.mobileSidesPadding};

  ${({ theme }) => theme.mq.bigTablet} {
    padding-right: 65px;
  }
`;

const StyledHeader = styled(Header)`
  text-align: left;
`;

const StyledHeaderH2 = styled.h2`
  margin: 15px 0;
`;

const StyledParagraph = styled(Paragraph)`
  padding: 0;
  margin: 10px 0;
  text-align: left;
  line-height: 1.5;
`;

const StyledImageWrapper = styled.div`
  display: grid;
  grid-gap: 40px;
  width: 100%;
  min-height: 180px;

  ${({ theme }) => theme.mq.bigTablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledImg = styled(Img)`
  max-width: 500px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArticleTemplate = ({
  data: {
    datoCmsArticle: {
      author,
      title,
      articleContent,
      meta: { createdAt },
      featuredImage: { fluid },
    },
  },
}) => {
  const ImagesArray = [];

  return (
    <StyledWrapper>
      <StyledHeader>{title}</StyledHeader>
      <StyledParagraph>{author}</StyledParagraph>
      <StyledParagraph>Created {createdAt}</StyledParagraph>
      <StyledImg fluid={fluid} />
      {articleContent.map((item) => {
        const itemKey = Object.keys(item)[1];

        switch (itemKey) {
          case 'paragraphContent':
            return <StyledParagraph key={item.id}>{item[itemKey]}</StyledParagraph>;
          case 'headingContent':
            return <StyledHeaderH2 key={item.id}>{item[itemKey]}</StyledHeaderH2>;
          case 'imageData':
            ImagesArray.push(item);
            return '';
          default:
            return null;
        }
      })}
      {ImagesArray.length ? (
        <StyledImageWrapper>
          {ImagesArray.map(({ id, imageData }) => (
            <StyledImg key={id} fluid={imageData.fluid} />
          ))}
        </StyledImageWrapper>
      ) : null}
    </StyledWrapper>
  );
};

ArticleTemplate.propTypes = {
  data: PropTypes.shape({
    datoCmsArticle: PropTypes.shape({
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      articleContent: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          headingContent: PropTypes.string,
          paragraphContent: PropTypes.string,
          imageData: PropTypes.shape({
            fluid: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
          }),
        })
      ).isRequired,
      featuredImage: PropTypes.shape({
        fluid: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
          .isRequired,
      }).isRequired,
      meta: PropTypes.shape({
        createdAt: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query querySingleArticle($articleId: String!) {
    datoCmsArticle(id: { eq: $articleId }) {
      title
      author
      meta {
        createdAt(formatString: "DD.MM.YYYY")
      }
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fluid(maxWidth: 500) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          id
        }
      }
      featuredImage {
        fluid(maxWidth: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

export default ArticleTemplate;
