import React, { useEffect, useState, Fragment } from 'react'

import SeatGrid from '../../components/SeatGrid'
import SelectedSeat from './SelectedSeat'
import { createLayout } from './utils'

const seatId = (seatClass, row, seat) => `${seatClass}-${row}-${seat}`

const selectedSeatColumns = [
  {
    title: 'Class',
    value: ({ class: seatClass }) => seatClass,
  },
  {
    title: 'Row',
    value: ({ row }) => row,
  },
  {
    title: 'Seat',
    value: ({ seat }) => seat,
  },
]

const SeatMap = () => {
  const [seats, setSeats] = useState({})
  const [selectedSeat, setSelected] = useState({})

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
        setSelected({})
        return
      }
    }
    item.selected = true
    setSelected(item)
  }

  return (
    <Fragment>
      <SelectedSeat seat={selectedSeat} columns={selectedSeatColumns} />
      <SeatGrid seats={seats} selectSeat={selectSeat}/>
    </Fragment>
  )
}

export default SeatMap