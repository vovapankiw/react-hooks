import { useEffect, useState } from "react";

export const useFetch = (url, initValue) => {
  const [result, setResult] = useState(initValue);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setResult(result);
      });
  }, [url]);

  return result;
};
