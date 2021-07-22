import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { InnerWrapper, Wrapper } from './Navbar.styles';

const Navbar = () => (
  <Wrapper>
    <InnerWrapper>
      <h1>links</h1>
      <Button>+ Add new link</Button>
    </InnerWrapper>
  </Wrapper>
);

Navbar.propTypes = {};

export default Navbar;
