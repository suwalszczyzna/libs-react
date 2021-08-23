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
import { useForm } from 'react-hook-form';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const AddLinkPage = () => {
  const { tags, loading } = useGetTags();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <PageInnerWrapper>
      <SectionTitle>Add new link</SectionTitle>
      <p>✂ Paste your url below, give it fancy title and appropriate tags ✨</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          label={'Your url'}
          placeholder={'eg. https://google.com'}
          {...register('url', { required: true })}
        />
        {errors.url?.type === 'required' && 'Url is required'}
        <InputForm label={'Title'} {...register('title', { required: true })} />
        {errors.title?.type === 'required' && 'Title is required'}
        {loading ? (
          <LoaderSpinner />
        ) : (
          <MultiSelect
            name="tags"
            placeholder="Choose tags"
            options={getTagOptions(tags)}
          />
        )}
        <ButtonWrapper>
          <Button type="submit">Add link</Button>
        </ButtonWrapper>
      </form>
    </PageInnerWrapper>
  );
};

export default AddLinkPage;
