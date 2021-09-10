import React, { useEffect, useState } from 'react';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import { PageInnerWrapper } from 'components/atoms/PageInnerWrapper/PageInnerWrapper';
import { Button } from 'components/atoms/Button/Button';
import useGetTags from 'hooks/useGetTags';
import { getTagOptions } from 'Utils/DataUtils';
import { LoaderSpinner } from 'components/atoms/LoaderSpinner/LoaderSpinner';
import { Controller, useForm } from 'react-hook-form';
import { MultiSelect } from 'components/molecules/MultiSelect/MultiSelect';
import { createLink } from 'api/firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormErrorMessage } from 'components/atoms/FormErrorMessage/FormErrorMessage';
import { InputForm } from 'components/molecules/InputForm/InputForm';
import { useHistory } from 'react-router-dom';
import { backendServiceApi, endpoints } from 'api/backend';
import useDebounce from 'hooks/useDebounce';
import { ButtonWrapper, Form } from 'pages/AddLinkPage.styles';

const AddLinkPage = () => {
  const { tags } = useGetTags();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const [inputUrl, setInputUrl] = useState('');
  const [loadingTitle, setLoadingTitle] = useState(false);
  const debounceInputUrl = useDebounce(inputUrl, 500);

  useEffect(() => {
    if (debounceInputUrl) {
      setLoadingTitle(true);
      backendServiceApi
        .get(`${endpoints.site_info}?url=${debounceInputUrl}/`)
        .then((response) => {
          console.log(response.data);
          setValue('title', response.data.title, { shouldValidate: true });
          setLoadingTitle(false);
        })
        .catch(() => {
          setValue('title', '', { shouldValidate: true });
          setLoadingTitle(false);
        });
    }
  }, [debounceInputUrl, setValue]);

  const onSubmit = (data) => {
    createLink(data)
      .then((docRef) => {
        console.log(`Doc crated with id ${docRef.id}`);
        history.push('/');
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
          onChange={(event) => setInputUrl(event.target.value)}
        />
        {errors.url && (
          <FormErrorMessage>{errors.url.message}</FormErrorMessage>
        )}
        {loadingTitle ? (
          <LoaderSpinner />
        ) : (
          <>
            <InputForm
              label={'Title'}
              {...register('title', { required: 'Title is required' })}
            />
            {errors.title && (
              <FormErrorMessage>{errors.title.message}</FormErrorMessage>
            )}
          </>
        )}
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
        <ButtonWrapper>
          <Button type="submit">Add link</Button>
        </ButtonWrapper>
      </Form>
      <ToastContainer />
    </PageInnerWrapper>
  );
};

export default AddLinkPage;
