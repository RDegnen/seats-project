import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'

import './style.css'

const SelectedSeat = ({ seat, columns }) => (
  <Row className="selectedSeatRow">
    {columns.map(({ title, value }) => (
      <Col key={title} className="selectedSeatCol" md="3">
        {title}: {value(seat)}
      </Col>
    ))}
  </Row>
)

SelectedSeat.propTypes = {
  seat: PropTypes.object,
  columns: PropTypes.array,
}

export default SelectedSeat