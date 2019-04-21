import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'

import SeatRow from '../SeatRow'
import { classes } from '../../constants'
import { seatPropType } from '../props'
import './style.css'

const ClassHeader = ({ row }) => (
  <Row className="headerRow">
    {row.map(({ seat, aisle }) => (
      <Col key={seat} className="headerCol">
        {aisle ? '' : seat}
      </Col>
    ))}
  </Row>
)

ClassHeader.propTypes = {
  row: PropTypes.arrayOf(seatPropType).isRequired,
}

const SeatGrid = ({ seats }) => {
  return (
    <Container>
      {[classes.FIRST, classes.BUSINESS, classes.ECONOMY].map(seatClass => {
        const classObj = seats[seatClass] || {}
        const firstRow = classObj[Object.keys(classObj)[0]] || []
        return (
          <Fragment key={seatClass}>
            <ClassHeader row={firstRow} />
            {Object.keys(classObj).map(rowKey => {
              const row = classObj[rowKey]
              return (
                <SeatRow key={`${rowKey}`} row={row} />
              )
            })}
          </Fragment>
        )})}
    </Container>
  )
}

SeatGrid.propTypes = {
  seats: PropTypes.object.isRequired
}

export default SeatGrid