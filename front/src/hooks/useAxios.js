import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios(url, options);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      setData(null);
      setError(null);
      setLoading(false);
    };
  }, [url, options]);

  return { data, error, loading };
};

export default useAxios;
