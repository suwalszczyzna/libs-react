import { axiosInstance, endpoints } from 'api/config';

const pageSize = 10;

export const getLinks = async (nextPage) => {
  const url = nextPage || `${endpoints.links}?page_size=${pageSize}`;
  const { data: links } = await axiosInstance.get(url);
  return links;
};

export const createLink = async (newItemData) => {
  const newItem = {
    url: newItemData.url,
    title: newItemData.title,
    faviconUrl: newItemData.favicon || '',
    tags: newItemData.tags.map((tag) => {
      return { name: tag.label };
    }),
  };
  const { data } = await axiosInstance.post(endpoints.links, newItem);
  return data;
};
