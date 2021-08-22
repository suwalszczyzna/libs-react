import React, { useCallback, useRef, useState } from 'react';
import LinkItem from 'components/molecules/LinkItem/LinkItem';
import useGetLinks from 'hooks/useGetLinks';
import { LoaderSpinner } from 'components/atoms/LoaderSpinner/LoaderSpinner';

export const LinkItemList = () => {
  const [lastItem, setLastItem] = useState(0);
  const { loading, error, links } = useGetLinks(lastItem);

  const observer = useRef();
  const lastLinkRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setLastItem(links[links.length - 1]);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, links]
  );

  return (
    <>
      {links.map((link, index) => {
        const item = { ...link.data(), id: link.id };
        if (links.length === index + 1) {
          return <LinkItem key={item.id} ref={lastLinkRef} link={item} />;
        } else {
          return <LinkItem key={item.id} link={item} />;
        }
      })}
      {loading && <LoaderSpinner />}
      <div>{error && 'Error'}</div>
    </>
  );
};
