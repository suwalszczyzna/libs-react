import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_BACKEND_URL;

export const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export const endpoints = {
  links: 'link/',
  tags: 'tag/',
  siteFavicon: 'service/site_favicon',
  siteInfo: 'service/site_info',
};
