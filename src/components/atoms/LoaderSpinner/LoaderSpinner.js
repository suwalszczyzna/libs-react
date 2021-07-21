import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderSpinner = styled.div`
  margin: 0 auto;
  border: 6px solid ${({ theme }) => theme.colors.stroke};
  border-top: 6px solid ${({ theme }) => theme.colors.success};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1.1s cubic-bezier(0.25, 0.76, 0.67, 0.71) infinite;
`;
