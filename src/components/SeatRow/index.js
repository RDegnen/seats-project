import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'

import { seatPropType } from '../props'
import './style.css'

const SeatRow = ({ row }) => {
  return (
    <Row className="seatRow">
      {row.map(seat => {
        return (
          <Col key={`${seat.seat}${seat.class}`}>
            <div className="seat">
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

SeatRow.propTypes = {
  row: PropTypes.arrayOf(seatPropType).isRequired,
}

export default SeatRow