import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";

export interface FetchResponse {
  id: number;
  genre: string;
  title: string;
  thumbnail: string;
  platform: string;
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dep?: any[],
) => {
  console.log("=======>" + requestConfig);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<T[]>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    dep ? [...dep] : [],
  );
  return { data, error, isLoading };
};

export default useData;
