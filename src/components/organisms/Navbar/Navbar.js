import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { InnerWrapper, Logo, Wrapper } from './Navbar.styles';
import SiteLogo from 'assets/icons/logo.svg';

const Navbar = () => (
  <Wrapper>
    <InnerWrapper>
      <Logo src={SiteLogo} alt="Site logo" />
      <Button>Add new link</Button>
    </InnerWrapper>
  </Wrapper>
);

Navbar.propTypes = {};

export default Navbar;
