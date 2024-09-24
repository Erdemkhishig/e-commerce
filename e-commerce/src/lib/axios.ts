import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
    baseURL: process.env.API,
    headers: {
        "Content-Type": "application/json",
    },
});
