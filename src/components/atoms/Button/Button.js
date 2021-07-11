import styled from 'styled-components';

export const Button = styled.button`
  padding: 3px 20px;
  max-width: 300px;
  height: 30px;
  font-size: ${({ theme }) => theme.fonts.m};
  background-color: ${({ theme }) => theme.colors.success};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.elementBackground};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.successHover};
  }
`;
