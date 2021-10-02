import React from 'react';
import { NotFoundPic } from 'assets/images/NotFoundPic';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 50%;
    height: auto;
    margin: 20px;
  }
`;

export const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundPic />
      <h1>Page not found</h1>
      <p>Did you get lost?</p>
    </NotFoundWrapper>
  );
};
