import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  font-weight: ${({ theme, bold }) => (bold ? theme.font.styles.bold : theme.font.styles.regular)};
  padding: 0 50px;
  margin: 20px 0 40px;
  text-align: center;

  ${({ theme }) => theme.mq.bigTablet} {
    text-align: left;
    padding: 0;
  }
`;

export default Paragraph;
