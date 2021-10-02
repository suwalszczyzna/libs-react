import { axiosInstance, endpoints } from 'api/config';

export const getTags = async () => {
  try {
    const { data: tags } = await axiosInstance.get(endpoints.tags);
    return tags;
  } catch (e) {
    console.error(e);
  }
};
