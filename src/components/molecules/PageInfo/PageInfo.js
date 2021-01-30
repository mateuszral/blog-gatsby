import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledHeader = styled(Header)`
  ${({ theme }) => theme.mq.bigTablet} {
    width: 50%;
    font-size: ${({ theme, homepage }) => homepage && theme.font.size.bigHeader};
    text-align: ${({ homepage }) => homepage && 'right'};
    line-height: ${({ homepage }) => homepage && '0.9'};
  }
`;

const StyledParagraph = styled(Paragraph)`
  ${({ theme }) => theme.mq.bigTablet} {
    width: 25vw;
    text-align: ${({ homepage }) => homepage && 'right'};
  }
`;

const PageInfo = ({ title, content, homepage }) => (
  <>
    <StyledHeader homepage={homepage}>{title}</StyledHeader>
    <StyledParagraph homepage={homepage}>{content}</StyledParagraph>
  </>
);

PageInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  homepage: PropTypes.bool,
};

PageInfo.defaultProps = {
  content:
    'While artists work from real to the abstract, architects must work from the abstract to the real.',
  homepage: false,
};

export default PageInfo;
