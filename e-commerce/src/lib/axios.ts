import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
    baseURL: "https://e-commerce-nr7u.onrender.com/",
    headers: {
        "Content-Type": "application/json",
    },
});
