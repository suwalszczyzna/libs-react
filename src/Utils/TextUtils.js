export const getBaseUrl = (url) => {
  const pattern = /http.?:\/\/([^/]+)/i;
  return url.match(pattern)[1];
};
