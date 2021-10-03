import { useEffect, useRef } from 'react';

export default function useIntersectionObserver(action) {
  const observer = useRef(null);
  const lastLinkRef = useRef(null);

  useEffect(() => {
    const options = {
      root: document,
      threshold: 1,
    };
    const callbackFn = (entries) => {
      if (entries[0].isIntersecting) {
        action();
      }
    };
    observer.current = new IntersectionObserver(callbackFn, options);
    if (lastLinkRef.current) {
      observer.current.observe(lastLinkRef.current);
    }
    return () => {
      observer.current.disconnect();
    };
  }, [action]);

  return { lastLinkRef };
}
