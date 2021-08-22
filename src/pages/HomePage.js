import React from 'react';
import { LinkItemList } from 'components/organisms/LinkItemList/LinkItemList';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import { PageInnerWrapper } from 'components/atoms/PageInnerWrapper/PageInnerWrapper';

const HomePage = () => {
  return (
    <PageInnerWrapper>
      <SectionTitle>Fresh resources</SectionTitle>
      <LinkItemList />
    </PageInnerWrapper>
  );
};

export default HomePage;
