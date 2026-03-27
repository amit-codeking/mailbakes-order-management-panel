import { create, ApisauceInstance, ApiResponse } from "apisauce";
import { apiMonitor } from "./monitor";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/";
console.log("BASEURL", BASE_URL);
// Define types for URIs
export const URIS = {
  /* Authentication */
  ADMIN_LOGIN: "/user/login",
  
};

// Create and configure the API client
export let api: ApisauceInstance = create({
  baseURL: BASE_URL,
  timeout: 600000,
});

// Add a monitor to the API instance
api.addMonitor(apiMonitor);

// Set withCredentials to allow cookies to be sent with each request
api.axiosInstance.defaults.withCredentials = true;

// Set up an interceptor to handle responses and errors
api.axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const isUnauthorized = error.response && error.response.status === 401;

    if (isUnauthorized && !originalRequest._retry) {
      originalRequest._retry = true;
      // Here you can add token refresh logic if required
      return api.axiosInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);
export { api as apiClient };