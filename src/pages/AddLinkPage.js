import React from 'react';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import { InputForm } from 'components/molecules/InputForm/InputForm.styles';
import { PageInnerWrapper } from 'components/atoms/PageInnerWrapper/PageInnerWrapper';
import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { MultiSelect } from 'components/molecules/MultiSelect/MultiSelect';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const tagOptions = [
  { value: 'javascript', label: 'javascript' },
  { value: 'react', label: 'react' },
  { value: 'python', label: 'python' },
  { value: 'html', label: 'html' },
];

const AddLinkPage = () => {
  return (
    <PageInnerWrapper>
      <SectionTitle>Add new link</SectionTitle>
      <InputForm
        label={'Paste your url here'}
        placeholder={'eg. https://google.com'}
      />
      <InputForm label={'Title'} />
      <MultiSelect name="tags" placeholder="Choose tags" options={tagOptions} />
      <ButtonWrapper>
        <Button>Add link</Button>
      </ButtonWrapper>
    </PageInnerWrapper>
  );
};

export default AddLinkPage;
