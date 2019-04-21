import PropTypes from 'prop-types'

export const seatPropType = PropTypes.shape({
  seat: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  class: PropTypes.string,
  occupied: PropTypes.bool,
  aisle: PropTypes.bool,
  selected: PropTypes.bool,
})