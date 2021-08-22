import React from 'react';
import { NavItemButton } from 'components/atoms/NavItemButton/NavItemButton';
import { InnerWrapper, Wrapper } from './Navbar.styles';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Wrapper>
    <InnerWrapper>
      <Link to="/">
        <h1>links</h1>
      </Link>

      <Link to="/add-link">
        <NavItemButton>+ Add new link</NavItemButton>
      </Link>
    </InnerWrapper>
  </Wrapper>
);

Navbar.propTypes = {};

export default Navbar;
