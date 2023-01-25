import { useEffect, useState } from "react"


const useFetchFavoriteUrls = (urls) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        );
        setData(response);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
        return error;
      }
    };
    fetchData();
  },[urls]);
  return {data,loading,error};
};

export default useFetchFavoriteUrls;
