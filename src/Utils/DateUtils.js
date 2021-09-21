import moment from 'moment';

export const getFormattedData = (date, format) => {
  return moment(date).format(format);
};
