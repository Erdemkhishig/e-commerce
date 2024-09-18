import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
    baseURL: "https://e-commerce-m67i.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});
