import React from 'react';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import { PageInnerWrapper } from 'components/atoms/PageInnerWrapper/PageInnerWrapper';
import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';
import useGetTags from 'hooks/useGetTags';
import { getTagOptions } from 'Utils/DataUtils';
import { LoaderSpinner } from 'components/atoms/LoaderSpinner/LoaderSpinner';
import { Controller, useForm } from 'react-hook-form';
import { MultiSelect } from 'components/molecules/MultiSelect/MultiSelect';
import { createLink } from 'libs/firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormErrorMessage } from 'components/atoms/FormErrorMessage/FormErrorMessage';
import { InputForm } from 'components/molecules/InputForm/InputForm';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Form = styled.form`
  & > *:not(p) {
    margin-top: 20px;
  }
`;

const AddLinkPage = () => {
  const { tags, loading } = useGetTags();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createLink(data)
      .then((docRef) => {
        console.log(`Doc crated with id ${docRef.id}`);
        toast.success('🎉 New link added! Thanks 😎');
      })
      .catch((error) => {
        console.error(`Error while adding doc: ${error}`);
        toast.error(`Something goes wrong 😨`);
      })
      .finally(() => reset());
  };

  return (
    <PageInnerWrapper>
      <SectionTitle>Add new link</SectionTitle>
      <p>✂ Paste your url below, give it fancy title and appropriate tags ✨</p>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          label={'Your url'}
          placeholder={'eg. https://google.com'}
          {...register('url', {
            required: 'Url is required',
            pattern: {
              value: /http.?:\/\/([^/]+)/i,
              message: 'Please enter a valid url, eg. https://google.com',
            },
          })}
        />
        {errors.url && (
          <FormErrorMessage>{errors.url.message}</FormErrorMessage>
        )}
        <InputForm
          label={'Title'}
          {...register('title', { required: 'Title is required' })}
        />
        {errors.title && (
          <FormErrorMessage>{errors.title.message}</FormErrorMessage>
        )}
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
                  placeholder="Choose tags"
                />
              )}
            />
            {errors.tags?.type === 'required' && (
              <FormErrorMessage>Any tag is required</FormErrorMessage>
            )}
          </>
        )}
        <ButtonWrapper>
          <Button type="submit">Add link</Button>
        </ButtonWrapper>
      </Form>
      <ToastContainer />
    </PageInnerWrapper>
  );
};

export default AddLinkPage;
