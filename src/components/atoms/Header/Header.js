import styled from 'styled-components';

const Header = styled.h1`
  font-size: ${({ theme }) => theme.font.size.header};
  text-align: center;

  ${({ theme }) => theme.mq.bigTablet} {
    text-align: left;
  }
`;

export default Header;
