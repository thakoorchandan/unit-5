import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((x) => x.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
      });
  }, []);

  return {
    loading,
    error,
    data,
  };
}

export default useFetch;
