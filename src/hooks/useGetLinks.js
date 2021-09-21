import { useEffect, useState } from 'react';
import { getLinks } from 'api/api';

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
      .then((data) => {
        setNextPage(data.next);
        setLinks((prevState) => {
          return [...prevState, ...data.results];
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
