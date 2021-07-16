import React from 'react';
import styled from 'styled-components';
import Navbar from 'components/organisms/Navbar/Navbar';
import { device } from 'assets/styles/rwd';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.siteBackground};
  width: 100%;
  height: 100vh;
  margin: 0;
`;

const InnterWrapper = styled.div`
  margin: 0 auto;

  @media only screen and ${device.mobileS} {
    margin: 10px;
  }

  @media only screen and ${device.tablet} {
    width: ${({ theme }) => theme.sizes.siteWidth};
    margin: 0 auto;
  }
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <InnterWrapper>{children}</InnterWrapper>
    </Wrapper>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
