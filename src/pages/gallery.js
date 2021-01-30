import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Paragraph from 'components/atoms/Paragraph/Paragraph';

import PageInfo from 'components/molecules/PageInfo/PageInfo';

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
  padding: 0 ${({ theme }) => theme.layout.mobileSidesPadding} 50px;

  ${({ theme }) => theme.mq.bigTablet} {
    grid-template-columns: repeat(3, 1fr);
    padding-left: 0;
  }
`;

const StyledParagraph = styled(Paragraph)`
  ${({ theme }) => theme.mq.bigTablet} {
    text-align: center;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`;

const GalleryPage = ({
  data: {
    allDatoCmsGallery: { nodes },
  },
}) => (
  <>
    <PageInfo title="gallery" />
    {nodes.map(({ id, image, meta: { updatedAt } }) => (
      <Fragment key={id}>
        <StyledParagraph>Updated {updatedAt}</StyledParagraph>
        <ContentWrapper>
          {image.map(({ fluid, originalId }) => (
            <StyledImg key={originalId} fluid={fluid} />
          ))}
        </ContentWrapper>
      </Fragment>
    ))}
  </>
);

GalleryPage.propTypes = {
  data: PropTypes.shape({
    allDatoCmsGallery: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          image: PropTypes.arrayOf(
            PropTypes.shape({
              fluid: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
                .isRequired,
              originalId: PropTypes.string.isRequired,
            })
          ).isRequired,
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
    allDatoCmsGallery {
      nodes {
        id
        image {
          fluid(maxWidth: 500, maxHeight: 281) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
          originalId
        }
        meta {
          updatedAt(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
`;

export default GalleryPage;
