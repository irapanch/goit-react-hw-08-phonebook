import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <BallTriangle
        height={30}
        width={30}
        radius={3}
        color="rgb(36, 31, 31)"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </StyledLoader>
  );
};
