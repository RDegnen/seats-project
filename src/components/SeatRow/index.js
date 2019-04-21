import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap'

import { seatPropType } from '../props'
import RowItem from '../RowItem'
import './style.css'

const SeatRow = ({ row, ...rest }) => (
  <Row className="seatRow">
    {row.map(seat => (
      <RowItem
        key={`${seat.seat}${seat.class}`}
        item={seat}
        {...rest}
      />
    ))}
  </Row>
)

SeatRow.propTypes = {
  row: PropTypes.arrayOf(seatPropType).isRequired,
}

export default SeatRow