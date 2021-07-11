import React from 'react';
import { LikeIcon } from 'components/atoms/LikeIcon/LikeIcon';
import {
  LikeCounter,
  Wrapper,
} from 'components/atoms/LikeButton/LikeButton.styles';
import PropTypes from 'prop-types';

export const LikeButton = ({ likes }) => {
  return (
    <Wrapper>
      <LikeIcon />
      <LikeCounter>{likes} likes</LikeCounter>
    </Wrapper>
  );
};

LikeButton.propTypes = {
  likes: PropTypes.number,
};
