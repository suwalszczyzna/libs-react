import PropTypes from 'prop-types';

export const LinkShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired.isRequired,
  url: PropTypes.string.isRequired,
};
