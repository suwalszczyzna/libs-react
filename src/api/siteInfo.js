import { axiosInstance, endpoints } from 'api/config';

export const getFavicon = async (url) => {
  try {
    const { data: responseData } = await axiosInstance.get(
      `${endpoints.siteFavicon}?url=${url}`
    );
    return responseData.icon;
  } catch (e) {
    console.error(e);
  }
};

export const getSiteTitle = async (url) => {
  try {
    const { data: responseData } = await axiosInstance.get(
      `${endpoints.siteInfo}?url=${url}`
    );
    return responseData.title;
  } catch (e) {
    console.error(e);
  }
};
