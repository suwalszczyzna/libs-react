import React from 'react';
import styled from 'styled-components';
import { StyledInput } from 'components/atoms/StyledInput/StyledInput';
import { Favicon } from 'components/molecules/Favicon/Favicon';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
`;

export const InputForm = React.forwardRef(
  (
    {
      label,
      placeholder,
      name,
      onChange,
      onBlur,
      favIcon,
      faviconUrl,
      type = 'text',
    },
    ref
  ) => (
    <Wrapper>
      <label htmlFor={name}>{label}:</label>
      {favIcon && <Favicon imgUrl={faviconUrl} />}
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
