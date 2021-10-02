import React from 'react';
import { NavItemButton } from 'components/atoms/NavItemButton/NavItemButton';
import { InnerWrapper, LogoLink, Wrapper } from './Navbar.styles';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Wrapper>
    <InnerWrapper>
      <LogoLink to="/">
        <span>Daemon's libs</span>
      </LogoLink>

      <Link to="/add-link">
        <NavItemButton>+ Add new link</NavItemButton>
      </Link>
    </InnerWrapper>
  </Wrapper>
);

Navbar.propTypes = {};

export default Navbar;
