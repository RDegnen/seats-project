import React, { useEffect, useState } from 'react'

import SeatGrid from '../../components/SeatGrid'
import { mapSeats } from './utils'

const SeatMap = () => {
  const [seats, setSeats] = useState({})

  const getSeats = async () => {
    const res = 
      await fetch('https://s3.amazonaws.com/frontend-candidate-homework.lola.co/seats.json', {
          method: 'GET',
          mode: 'cors',
        }).then(res => res.json())
          .then(json => json)
          .catch(err => err)

    setSeats(mapSeats(res))
  }

  useEffect(() => {
    getSeats()
  }, [])

  return (
    <SeatGrid seats={seats}/>
  )
}

export default SeatMap