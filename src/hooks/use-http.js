import { useState, useCallback } from "react";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);

  const sendRequest = useCallback(async (reqConfig, applyData = () => {}) => {
    setIsLoading(true);
    setError(false);

    try {
      const res = await fetch(reqConfig.url, {
        method: reqConfig.method ? reqConfig.method : "GET",
        body: reqConfig.body ? JSON.stringify(reqConfig.body) : null,
        headers: reqConfig.headers ? reqConfig.headers : {},
      });

      if (res.status !== 200 && !res.ok) {
        throw new Error("something went wrong!");
      }

      const data = await res.json();

      applyData(data);
    } catch (error) {
      setError(true);
      console.log(error);
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    hasError: error,
    sendRequest,
  };
};
