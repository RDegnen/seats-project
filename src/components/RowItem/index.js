import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'reactstrap'

import { seatPropType } from '../props'
import { colors } from '../../constants'
import './style.css'

const setColor = (occupied, selected) => ({
  backgroundColor: occupied ? colors.LIGHT_GREY : 
    selected ? colors.LOLA_PINK : colors.LOLA_BLUE
})

const Seat = ({ occupied, onClick, selected }) => (
  <div 
    className="seat" 
    style={setColor(occupied, selected)} 
    onClick={onClick}
  >
  </div>
)

Seat.propTypes = {
  occupied: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
}

const Aisle = ({ row }) => (
  <span className="aisle">{row}</span>
)

Aisle.propTypes = {
  row: PropTypes.number.isRequired,
}

const RowItem = ({ item, selectSeat }) => {
  const { aisle, row, occupied, selected } = item
  const handleClick = () => selectSeat(item)
  return (
    <Col>
      {aisle ? (
        <Aisle row={row} />
      ) : (
        <Seat 
          occupied={occupied} 
          onClick={handleClick} 
          selected={selected}
        />
      )}
    </Col>
  )
}

RowItem.propTypes = {
  item: seatPropType.isRequired,
  selectSeat: PropTypes.func.isRequired,
}

export default RowItem