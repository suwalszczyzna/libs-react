import styled from 'styled-components';

export const CardTitle = styled.a`
  font-size: ${({ theme }) => theme.fonts.l};
  color: ${({ theme }) => theme.colors.main};
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease;

  :hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
