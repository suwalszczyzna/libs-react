import React from 'react';
import { LinkItemList } from 'components/organisms/LinkItemList/LinkItemList';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import styled from 'styled-components';

const Wrapper = styled.div`
  & > * {
    margin-bottom: 20px;
  }

  ${SectionTitle} {
    margin-bottom: 50px;
  }
`;
const HomePage = () => {
  return (
    <Wrapper>
      <SectionTitle>Fresh resources</SectionTitle>
      <LinkItemList />
    </Wrapper>
  );
};

export default HomePage;
