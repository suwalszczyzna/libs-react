import styled, { keyframes } from 'styled-components';

export const pulse = keyframes`
  0% { transform: scale(0.8); }
  50% { transform: scale(1.1); }
  100% { transform: scale(0.8); }
`;

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.colors.main};
  cursor: pointer;
  transition: transform 0.2s ease;
  :hover {
    transform: scale(0.8);
  }
`;
