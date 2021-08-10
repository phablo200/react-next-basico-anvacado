import { useEffect, useState } from 'react';

const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);
  console.log('match', match);

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(!!matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  console.log(match);
  return match;
};

export const App = () => {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 321px)');
  const small = useMediaQuery('(max-width: 321px)');

  const background = huge ? 'green' : big ? 'red' : medium ? 'yellow' : small ? 'purple' : null;

  return <div style={{ fontSize: '60px', background }}>Exemplo Media Query</div>;
};
