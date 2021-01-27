import styled from 'styled-components';

const Paragraph = styled.h1`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  font-weight: ${({ theme, bold }) => (bold ? theme.font.styles.bold : theme.font.styles.regular)};
  padding: 0 50px;
  margin: 1em 0;

  ${({ theme }) => theme.mq.bigTablet} {
    padding: 0;
  }
`;

export default Paragraph;
