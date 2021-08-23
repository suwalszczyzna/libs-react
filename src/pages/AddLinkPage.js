import React from 'react';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import { InputForm } from 'components/molecules/InputForm/InputForm.styles';
import { PageInnerWrapper } from 'components/atoms/PageInnerWrapper/PageInnerWrapper';
import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { MultiSelect } from 'components/molecules/MultiSelect/MultiSelect';
import useGetTags from 'hooks/useGetTags';
import { getTagOptions } from 'Utils/DataUtils';
import { LoaderSpinner } from 'components/atoms/LoaderSpinner/LoaderSpinner';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const AddLinkPage = () => {
  const { tags, loading } = useGetTags();

  return (
    <PageInnerWrapper>
      <SectionTitle>Add new link</SectionTitle>
      <p>✂ Paste your url below, give it name and appropriate tags ✨</p>
      <InputForm
        label={'Your url here'}
        placeholder={'eg. https://google.com'}
      />
      <InputForm label={'Title'} />
      {loading ? (
        <LoaderSpinner />
      ) : (
        <>
          <MultiSelect
            name="tags"
            placeholder="Choose tags"
            options={getTagOptions(tags)}
          />
          <ButtonWrapper>
            <Button>Add link</Button>
          </ButtonWrapper>
        </>
      )}
    </PageInnerWrapper>
  );
};

export default AddLinkPage;
