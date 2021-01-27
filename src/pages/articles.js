import React from 'react';
import styled from 'styled-components';
import slugify from 'slugify';

import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

import ArticlePreview from 'components/molecules/ArticlePreview/ArticlePreview';

import { articles } from 'assets/data/articles';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const ArticlesPage = () => (
  <StyledWrapper>
    <Header>articles</Header>
    <Paragraph>While artists work from real to the abstract, architects must work from the abstract to the real.</Paragraph>
    <ContentWrapper>
      {articles.map(({ title, image }) => (
        <ArticlePreview key={title} title={title} image={image} slug={slugify(title, { lower: true })} />
      ))}
    </ContentWrapper>
  </StyledWrapper>
);

export default ArticlesPage;
