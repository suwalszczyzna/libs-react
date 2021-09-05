import axios from 'axios';

const baseURL = process.env.REACT_APP_API_SERVICE_URL;

export const endpoints = {
  site_info: 'site_info/',
  site_favicon: 'site_favicon/',
};

export const backendServiceApi = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});
