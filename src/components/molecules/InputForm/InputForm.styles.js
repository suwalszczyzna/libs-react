import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  height: 40px;
  border: none;
  background: ${({ theme }) => theme.colors.elementBackground};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  box-shadow: ${({ theme }) => theme.misc.mainShadow};

  padding: 0 20px;
  margin-left: 10px;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fonts.s};

  &:focus {
    outline: none;
    box-shadow: none;
    border: 2px solid ${({ theme }) => theme.colors.accent};
  }

  &:focus::placeholder {
    color: transparent;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
