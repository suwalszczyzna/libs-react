import React from 'react';
import PropTypes from 'prop-types';
import { links } from 'data/links';
import { LinkItem } from 'components/molecules/LinkItem/LinkItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  & > * {
    margin-bottom: 15px;
  }
`;

export const LinkItemList = () => {
  return (
    <Wrapper>
      {links.map((item) => (
        <LinkItem key={item.id} link={item} />
      ))}
    </Wrapper>
  );
};

LinkItemList.propTypes = {};
