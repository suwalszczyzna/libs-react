import React from 'react';
import { StyledSelect } from 'components/molecules/MultiSelect/MultiSelect.styles';

export const MultiSelect = React.forwardRef(
  ({ placeholder, name, options, ...fields }, ref) => (
    <StyledSelect
      isMulti
      name={name}
      options={options}
      classNamePrefix="Select"
      placeholder={placeholder}
      ref={ref}
      {...fields}
    />
  )
);

MultiSelect.propTypes = {};
