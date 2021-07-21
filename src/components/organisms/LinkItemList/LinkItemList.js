import React, { useEffect, useState } from 'react';
import { LinkItem } from 'components/molecules/LinkItem/LinkItem';
import styled from 'styled-components';
import firebase from 'libs/firebase';

const Wrapper = styled.div`
  & > * {
    margin-bottom: 15px;
  }
`;

export const LinkItemList = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('links').get();
      const docs = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      setLinks(docs);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      {links.map((item) => (
        <LinkItem key={item.id} link={item} />
      ))}
    </Wrapper>
  );
};
