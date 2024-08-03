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

export const useDynamicTransition = ({ increment, delay, length }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + increment) % length);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay, increment, length]);

  return index;
};
