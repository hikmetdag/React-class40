import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setError(false);
        setLoading(false);
      } catch (error) {
        setError(true);
        return error;
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
