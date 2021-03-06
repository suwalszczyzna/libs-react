import { useEffect, useState } from 'react';
import { getTags } from 'api/tags';

export default function useGetTags() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => setTags([]), []);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getTags()
      .then((data) => {
        setTags([...data]);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setError(e);
        setLoading(false);
      });
  }, []);
  return { tags, error, loading };
}
