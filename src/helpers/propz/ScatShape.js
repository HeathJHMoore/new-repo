import PropTypes from 'prop-types';

const scatCardShape = PropTypes.shape({
  location: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
  sampleNum: PropTypes.string,
  animal: PropTypes.string,
  uid: PropTypes.string
});

export default { scatCardShape };
