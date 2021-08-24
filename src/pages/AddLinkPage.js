import React from 'react';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import { InputForm } from 'components/molecules/InputForm/InputForm.styles';
import { PageInnerWrapper } from 'components/atoms/PageInnerWrapper/PageInnerWrapper';
import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';
import useGetTags from 'hooks/useGetTags';
import { getTagOptions } from 'Utils/DataUtils';
import { LoaderSpinner } from 'components/atoms/LoaderSpinner/LoaderSpinner';
import { Controller, useForm } from 'react-hook-form';
import { MultiSelect } from 'components/molecules/MultiSelect/MultiSelect';

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
    control,
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
          <>
            <Controller
              name="tags"
              rules={{ required: true }}
              control={control}
              render={({ field }) => (
                <MultiSelect
                  isMulti
                  {...field}
                  options={getTagOptions(tags)}
                  isClearable={true}
                />
              )}
            />
            {errors.tags?.type === 'required' && 'Tags are required'}
          </>
        )}
        <ButtonWrapper>
          <Button type="submit">Add link</Button>
        </ButtonWrapper>
      </form>
    </PageInnerWrapper>
  );
};

export default AddLinkPage;
