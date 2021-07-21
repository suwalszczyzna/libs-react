import { useEffect, useState } from 'react';
import { getLinks } from 'libs/firebase';

export default function useGetLinks(lastItem) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getLinks(lastItem)
      .then((data) => {
        setLinks((prevState) => {
          return [...prevState, ...data.docs];
        });
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      });
  }, [lastItem]);

  return { loading, error, links };
}
