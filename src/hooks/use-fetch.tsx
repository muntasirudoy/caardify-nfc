import { useCallback } from "react";
import { useAuth } from "@/components/providers/auth.provider";

export const useFetch = () => {
    const { axiosInstance } = useAuth();

    const fetchData = useCallback(async (url: string) => {
        console.log(url);
        const { data } = await axiosInstance.get(url);
        return data;
    }, [axiosInstance]);

    const postData = useCallback(async (url: string, body: any) => {
        console.log(url, body);
        const { data } = await axiosInstance.post(url, body);
        console.log(data);
        return data;
    }, [axiosInstance]);

    const putData = useCallback(async (url: string, body: any) => {
        console.log(url, body);
        const { data } = await axiosInstance.put(url, body);
        return data;
    }, [axiosInstance]);

    const deleteData = useCallback(async (url: string) => {
        console.log(url);
        const { data } = await axiosInstance.delete(url);
        return data;
    }, [axiosInstance]);

    return { fetchData, postData, putData, deleteData };
};
