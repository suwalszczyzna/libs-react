import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';

const StyleFilterTitle = styled(SectionTitle)`
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const FilterTitle = ({ filterName, value }) => {
  return (
    <StyleFilterTitle>
      <span>{filterName}:</span> {value}
    </StyleFilterTitle>
  );
};
