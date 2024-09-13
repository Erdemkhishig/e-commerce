import axios, { AxiosInstance } from "axios";

// Define the Axios instance with a base URL and default headers
export const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:3001", // Your API base URL
    headers: {
        "Content-Type": "application/json",
    },
});
