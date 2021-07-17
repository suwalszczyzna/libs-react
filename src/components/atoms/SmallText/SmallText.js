import styled from 'styled-components';

export const SmallText = styled.p`
  font-size: ${({ theme }) => theme.fonts.s};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 3px 0;
`;
