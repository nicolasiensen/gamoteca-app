import PropTypes from 'prop-types';

export const game = PropTypes.shape({
  id: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  platforms: PropTypes.arrayOf(PropTypes.string).isRequired,
  released_at: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  vr_enabled: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  score_count: PropTypes.number.isRequired
});
