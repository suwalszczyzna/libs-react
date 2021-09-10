import React from 'react';
import { GlobeIcon } from 'assets/icons/GlobeIcon';
import { Wrapper } from 'components/molecules/Favicon/Favicon.styles';

export const Favicon = ({ imgUrl, dark }) => {
  return (
    <Wrapper imgUrl={imgUrl} dark={dark}>
      {!imgUrl && <GlobeIcon />}
    </Wrapper>
  );
};

Favicon.propTypes = {};
