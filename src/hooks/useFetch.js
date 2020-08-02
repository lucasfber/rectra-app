import { useCallback, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(async (url, options) => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return [data, loading, error, request];
};

export default useFetch;
