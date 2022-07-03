import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCtr = new AbortController();
    fetch(url, { signal: abortCtr.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't fetch data from the given ressource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCtr.abort;
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
