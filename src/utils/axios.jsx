import axios from 'axios';

// Create an Axios instance
export const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    withCredentials: true
});

// Add a request interceptor
instance.interceptors.request.use(
    (config) => {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // If the token exists, set the Authorization header
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);
