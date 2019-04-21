import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'

import { seatPropType } from '../props'
import './style.css'

const Seat = () => (
  <div className="seat"></div>
)

const Aisle = ({ row }) => (
  <span className="aisle">{row}</span>
)

const SeatRow = ({ row }) => {
  return (
    <Row className="seatRow">
      {row.map(({ seat, aisle, class: seatClass, row }) => {
        return (
          <Col key={`${seat}${seatClass}`}>
            {aisle ? <Aisle row={row} /> : <Seat />}
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