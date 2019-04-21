import React, { useEffect, useState } from 'react'

import SeatGrid from '../../components/SeatGrid'
import { createLayout } from './utils'

const seatId = (seatClass, row, seat) => `${seatClass}-${row}-${seat}`

const SeatMap = () => {
  const [seats, setSeats] = useState({})
  const [selectedSeat, setSelected] = useState(null)

  const getSeats = async () => {
    const res = 
      await fetch('https://s3.amazonaws.com/frontend-candidate-homework.lola.co/seats.json', {
          method: 'GET',
          mode: 'cors',
        }).then(res => res.json())
          .then(json => json)
          .catch(err => err)

    setSeats(createLayout(res))
  }

  useEffect(() => {
    getSeats()
  }, [])

  const selectSeat = item => {
    const { occupied, row, seat, class: seatClass } = item
    if (occupied) {
      return
    } else if (selectedSeat) {
      selectedSeat.selected = false
      if (seatId(
            selectedSeat.class, 
            selectedSeat.row, 
            selectedSeat.seat
          ) === seatId(seatClass, row, seat)) {
        setSelected(null)
        return
      }
    }
    item.selected = true
    setSelected(item)
  }

  return (
    <SeatGrid seats={seats} selectSeat={selectSeat}/>
  )
}

export default SeatMap