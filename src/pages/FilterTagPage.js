import React from 'react';
import { LinkItemList } from 'components/organisms/LinkItemList/LinkItemList';
import { PageInnerWrapper } from 'components/atoms/PageInnerWrapper/PageInnerWrapper';
import { useParams } from 'react-router-dom';

const FilterTagPage = () => {
  const { filterTag } = useParams();

  return (
    <PageInnerWrapper>
      <LinkItemList filter={{ filterName: 'tag', value: filterTag }} />
    </PageInnerWrapper>
  );
};

export default FilterTagPage;
