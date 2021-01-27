import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: ${({ theme }) => theme.font.styles.semiBold};
  border: none;
  padding: 10px 25px;
  flex-shrink: 0;
`;

export default Button;
