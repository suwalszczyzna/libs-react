import React, { useCallback, useState } from 'react';
import LinkItem from 'components/molecules/LinkItem/LinkItem';
import useGetLinks from 'hooks/useGetLinks';
import { LoaderSpinner } from 'components/atoms/LoaderSpinner/LoaderSpinner';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

export const LinkItemList = () => {
  const [lastItem, setLastItem] = useState(0);
  const { loading, error, links, nextPage } = useGetLinks(lastItem);

  const getMoreLinks = useCallback(() => {
    if (loading || !nextPage) return;
    setLastItem(links[links.length - 1]);
  }, [links, loading, nextPage]);

  const { lastLinkRef } = useIntersectionObserver(getMoreLinks);

  return (
    <>
      {links.map((link, index) => {
        if (links.length === index + 1) {
          return <LinkItem key={link.id} ref={lastLinkRef} link={link} />;
        } else {
          return <LinkItem key={link.id} link={link} />;
        }
      })}
      {loading && <LoaderSpinner />}
      <div>{error && 'Error'}</div>
    </>
  );
};
