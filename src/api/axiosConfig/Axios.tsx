import axios from "axios";
import { refreshTokenRequest } from "../modules/Swiftsync.class";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});


axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("access");
    // const authToken =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyNzk5MzMxLCJpYXQiOjE3MzAyMDczMzEsImp0aSI6IjZhNjdhZDM2ZDQzNTQyMTJhMGQ4ZmIxNjRlN2E3NDk0IiwidXNlcl9pZCI6NTB9.GUQWN88NuODzZFnd1qh9a3LotVLjhcNYB3WYNXAnccA';
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosInstance;
