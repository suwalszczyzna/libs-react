import { useEffect, useState } from 'react';
import { getLinks } from 'api/links';

export default function useGetLinks(lastItem) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [links, setLinks] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    setLinks([]);
    setNextPage(null);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getLinks(nextPage)
      .then((links) => {
        setNextPage(links.next);
        setLinks((prevState) => {
          return [...prevState, ...links.results];
        });
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, [lastItem]); // eslint-disable-line react-hooks/exhaustive-deps

  return { loading, error, links, nextPage };
}
