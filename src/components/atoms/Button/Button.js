import styled from 'styled-components';

export const Button = styled.button`
  padding: 0 20px;
  height: 40px;
  min-width: 150px;
  color: ${({ theme }) => theme.colors.white};
  background: ${(props) =>
    props.danger
      ? ({ theme }) => theme.colors.danger
      : ({ theme }) => theme.colors.accent};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  box-shadow: ${({ theme }) => theme.misc.mainShadow};
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: none;
  }
`;
