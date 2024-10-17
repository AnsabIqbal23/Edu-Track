import axios from 'axios';
import { getToken } from './auth'; // Adjust the path as necessary

const instance = axios.create({
  baseURL: '/', // Your spring boot backend url
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach JWT to requests if available
instance.interceptors.request.use((config) => {
  const token = getToken(); // Ensure getToken is defined and imported
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
