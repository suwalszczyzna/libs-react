import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { InnerWrapper, Wrapper } from './Navbar.styles';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Wrapper>
    <InnerWrapper>
      <Link to="/">
        <h1>links</h1>
      </Link>

      <Link to="/add-link">
        <Button>+ Add new link</Button>
      </Link>
    </InnerWrapper>
  </Wrapper>
);

Navbar.propTypes = {};

export default Navbar;
