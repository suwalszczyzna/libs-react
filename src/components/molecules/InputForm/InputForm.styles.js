import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  height: 40px;
  border: none;
  background: ${({ theme }) => theme.colors.elementBackground};
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(175, 186, 189, 0.25);

  padding: 0 20px;
  margin-left: 10px;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fonts.s};
  //transition: all 0.2s;

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

export const InputForm = ({ label, placeholder, type = 'text' }) => {
  return (
    <Wrapper>
      <label htmlFor={label}>{label}:</label>
      <StyledInput id={label} type={type} placeholder={placeholder} />
    </Wrapper>
  );
};

InputForm.propTypes = {};
