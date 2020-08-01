import { useCallback, useState } from 'react';

const useFetch = (params) => {
  const [data, setData] = useState('');
  /* const [loading, setLoading] = useState(false); */

  const request = useCallback(async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    setData(data);
  }, []);

  console.log('data =>', data);
  return [data, setData, request];
};

export default useFetch;
