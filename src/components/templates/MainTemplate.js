import React from 'react';
import styled from 'styled-components';
import Navbar from 'components/organisms/Navbar/Navbar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.siteBackground};
  width: 100%;
  height: 100vh;
  margin: 0;
`;

const InnterWrapper = styled.div`
  width: ${({ theme }) => theme.sizes.siteWidth};
  margin: 0 auto;
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
