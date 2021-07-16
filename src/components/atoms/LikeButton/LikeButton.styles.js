import styled from 'styled-components';

export const LikeCounter = styled.p`
  font-size: ${({ theme }) => theme.fonts.m};
  margin-top: 5px;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
`;
