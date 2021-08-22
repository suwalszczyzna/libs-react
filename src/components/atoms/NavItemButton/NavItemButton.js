import styled from 'styled-components';

export const NavItemButton = styled.button`
  height: 30px;
  font-size: ${({ theme }) => theme.fonts.l};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
