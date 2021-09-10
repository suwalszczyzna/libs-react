import React, { useEffect, useState } from 'react';
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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormErrorMessage } from 'components/atoms/FormErrorMessage/FormErrorMessage';
import { InputForm } from 'components/molecules/InputForm/InputForm';
import { useHistory } from 'react-router-dom';
import { getFavicon } from 'libs/faviconGrabber';
import useDebounce from 'hooks/useDebounce';

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
  const history = useHistory();
  const [inputUrl, setInputUrl] = useState('');
  const debounceUrl = useDebounce(inputUrl, 500);
  const [faviconUrl, setFaviconUrl] = useState('');

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    createLink(data)
      .then(() => {
        toast.success('Link was added. Thanks! 😺');
      })
      .catch((error) => {
        console.error(`Error while adding doc: ${error}`);
        toast.error(`Something went wrong 😨`);
      })
      .finally(() => history.push('/'));
  };

  useEffect(() => {
    if (debounceUrl) {
      getFavicon(debounceUrl)
        .then((r) => {
          console.log(r);
          setFaviconUrl(r);
        })
        .catch((e) => console.error(e));
    }
  }, [debounceUrl]);

  return (
    <PageInnerWrapper>
      <SectionTitle>Add new link</SectionTitle>
      <p>✂ Paste your url below, give it fancy title and appropriate tags ✨</p>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          label={'Your url'}
          placeholder={'eg. https://google.com'}
          favIcon={true}
          faviconUrl={faviconUrl}
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
    </PageInnerWrapper>
  );
};

export default AddLinkPage;
