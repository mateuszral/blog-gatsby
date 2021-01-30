import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const ArticleWrapper = styled(Link)`
  position: relative;
  width: 100%;
  margin: 15px 0;

  ${({ theme }) => theme.mq.bigTablet} {
    margin: 0;
  }
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 15px;
  width: 80%;
  min-height: 40px;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  padding: 10px 15px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const StyledHeading = styled(Header)`
  font-size: ${({ theme }) => theme.font.size.articleHeader};
  text-align: left;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 5px 0;
  padding: 0;
  text-align: left;
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArticlePreview = ({ title, image, slug, updatedAt }) => (
  <ArticleWrapper as={Link} to={slug}>
    <StyledImg fluid={image} />
    <PreviewInfoLabel>
      <StyledHeading>{title}</StyledHeading>
      <StyledParagraph>{updatedAt}</StyledParagraph>
    </PreviewInfoLabel>
  </ArticleWrapper>
);

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  slug: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
};

export default ArticlePreview;
