import React from 'react';
import { StyledSelect } from 'components/molecules/MultiSelect/MultiSelect.styles';

export const MultiSelect = ({ placeholder, name, options }) => {
  return (
    <StyledSelect
      isMulti
      name={name}
      options={options}
      classNamePrefix="Select"
      placeholder={placeholder}
    />
  );
};

MultiSelect.propTypes = {};
