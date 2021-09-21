import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_BACKEND_URL;
const pageSize = 10;

const endpoints = {
  links: 'link/',
  tags: 'tag/',
  siteFavicon: 'service/site_favicon',
  siteInfo: 'service/site_info',
};

export const getFavicon = (url, minIconSize = 100) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${apiUrl}${endpoints.siteFavicon}?url=${url}&min_icon_size=${minIconSize}`
      )
      .then((response) => {
        resolve(response.data.icon);
      })
      .catch((e) => reject(e));
  });
};

export const getSiteTitle = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}${endpoints.siteInfo}?url=${url}`)
      .then((response) => {
        resolve(response.data.title);
      })
      .catch((e) => reject(e));
  });
};

export const getTags = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}${endpoints.tags}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => reject(e));
  });
};

export const createLink = (data) => {
  const newItem = {
    url: data.url,
    title: data.title,
    faviconUrl: data.favicon || '',
    tags: data.tags.map((tag) => {
      return { name: tag.label };
    }),
  };
  return new Promise((resolve, reject) => {
    axios
      .post(`${apiUrl}${endpoints.links}`, newItem)
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => reject(e));
  });
};

export const getLinks = (nextPage) => {
  const url = nextPage || `${apiUrl}${endpoints.links}?page_size=${pageSize}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => reject(e));
  });
};
