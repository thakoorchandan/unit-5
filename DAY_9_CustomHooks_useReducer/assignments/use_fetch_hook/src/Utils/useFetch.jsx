import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log("error: ", error);
      });
  }, []);

  return {
    loading,
    error,
    data,
  };
}

export default useFetch;
