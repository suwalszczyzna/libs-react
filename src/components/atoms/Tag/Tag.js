import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline;
  background: ${({ theme }) => theme.colors.siteBackground};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fonts.s};
  padding: 4px 10px;
  margin: 5px 5px 0 0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  letter-spacing: 0.8px;

  :hover {
    background: ${({ theme }) => theme.colors.warning};
    color: ${({ theme }) => theme.colors.elementBackground};
  }
`;

export const Tag = ({ name }) => {
  return <Wrapper>#{name}</Wrapper>;
};

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};
