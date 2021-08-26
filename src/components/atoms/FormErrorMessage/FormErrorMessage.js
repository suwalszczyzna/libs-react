import styled from 'styled-components';

export const FormErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.fonts.s};
  color: ${({ theme }) => theme.colors.danger};
  margin: 5px 0;
`;
