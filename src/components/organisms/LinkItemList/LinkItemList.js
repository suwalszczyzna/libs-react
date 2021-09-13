import React, { useCallback, useEffect, useRef, useState } from 'react';
import LinkItem from 'components/molecules/LinkItem/LinkItem';
import useGetLinks from 'hooks/useGetLinks';
import { LoaderSpinner } from 'components/atoms/LoaderSpinner/LoaderSpinner';

export const LinkItemList = () => {
  const [lastItem, setLastItem] = useState(0);
  const { loading, error, links } = useGetLinks(lastItem);
  const observer = useRef(null);
  const lastLinkRef = useRef(null);

  const getMoreLinks = useCallback(() => {
    if (loading) return;
    setLastItem(links[links.length - 1]);
  }, [links, loading]);

  useEffect(() => {
    const options = {
      root: document,
      threshold: 1,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        getMoreLinks();
      }
    };
    observer.current = new IntersectionObserver(callback, options);
    if (lastLinkRef.current) {
      observer.current.observe(lastLinkRef.current);
    }
    return () => {
      observer.current.disconnect();
    };
  }, [getMoreLinks]);

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
