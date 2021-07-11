import styled from 'styled-components';

export const CardTitle = styled.a`
  font-size: ${({ theme }) => theme.fonts.l};
  color: ${({ theme }) => theme.colors.main};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: text-decoration 0.2s ease;

  :hover {
    text-decoration: underline;
  }
`;
