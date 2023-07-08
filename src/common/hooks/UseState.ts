import useState from 'react';

export const Loader = () => {
  const [isFetching, setIsFetching] = useState(false);

  return { isFetching, setIsFetching };
};
