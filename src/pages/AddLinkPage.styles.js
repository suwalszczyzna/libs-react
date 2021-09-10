import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Form = styled.form`
  & > *:not(p) {
    margin-top: 20px;
  }
`;
