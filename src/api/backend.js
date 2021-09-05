import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/service';

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
