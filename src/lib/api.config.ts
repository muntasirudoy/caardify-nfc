import { config } from "@/config";
import axios from "axios";

export const createAxiosInstance = (getToken: any, skipToken = false) => {
  const instance = axios.create({
    baseURL: config.NEXT_PUBLIC_API_URL,
  });

  instance.interceptors.request.use((config) => {
    if (!skipToken) {
      const token = getToken();
      console.log(token);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  });

  return instance;
};
