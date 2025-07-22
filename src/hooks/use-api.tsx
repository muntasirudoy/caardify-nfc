import { useState } from "react";

const useApi = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const fetchData = async (method: string, body: any) => {
    setLoading(true);
    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(
          errorResponse.message || "Something went wrong with the API"
        );
      }

      const result = await response.json();
      setData(result);
    } catch (error: any) {
      console.error("API Error:", error);
      setError(error.message || "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useApi;
