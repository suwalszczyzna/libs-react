import axios from 'axios';

const grabberUrl = 'http://favicongrabber.com/api/';

const endpoints = {
  grab: 'grab/',
};

const getDomain = (url) => {
  const regex = 'http.?://(?<domain>[^/]+)';
  const found = url.match(regex);
  return found.groups.domain;
};

const getSize = (sizeStr) => {
  return parseInt(sizeStr.split('x')[0]);
};

const getIconBySize = (maxSize, data) => {
  return data.icons
    .filter((i) => i.sizes && getSize(i.sizes) >= maxSize)
    .sort((a, b) => getSize(a.sizes) < getSize(b.sizes));
};

export const getFavicon = (url, maxSize = 100) => {
  return new Promise((resolve, reject) => {
    axios
      .get(grabberUrl + endpoints.grab + getDomain(url))
      .then((response) => {
        const result = response.data;
        const iconsBySize = getIconBySize(maxSize, result);
        if (!iconsBySize.length) {
          resolve(result.icons[0].src);
        } else {
          resolve(iconsBySize[0].src);
        }
      })
      .catch((e) => reject(e));
  });
};
