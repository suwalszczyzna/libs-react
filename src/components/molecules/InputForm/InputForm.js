import React from 'react';
import {
  StyledInput,
  Wrapper,
} from 'components/molecules/InputForm/InputForm.styles';

export const InputForm = React.forwardRef(
  ({ label, placeholder, name, onChange, onBlur, type = 'text' }, ref) => (
    <Wrapper>
      <label htmlFor={name}>{label}:</label>
      <StyledInput
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
    </Wrapper>
  )
);

InputForm.propTypes = {};
