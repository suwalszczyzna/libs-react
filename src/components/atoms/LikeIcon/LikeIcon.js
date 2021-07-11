import React from 'react';
import { Svg } from 'components/atoms/LikeIcon/LikeIcon.styles';

export const LikeIcon = () => {
  return (
    <Svg
      width="20"
      height="19"
      viewBox="0 0 16 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.00001 2.04001C6.32713 0.319386 3.61476 0.319386 1.94188 2.04001C0.269007 3.76064 0.269007 6.54939 1.94188 8.27001L8.00001 14.5L14.0581 8.27001C15.731 6.54939 15.731 3.76064 14.0581 2.04001C12.3853 0.319386 9.67288 0.320011 8.00001 2.04001Z" />
    </Svg>
  );
};

LikeIcon.propTypes = {};
