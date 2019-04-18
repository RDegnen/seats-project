import React, { useEffect, useState } from 'react'

const groupBy = (seats, prop) => {
  const returnObj = {}
  seats.forEach(seat => {
    if (returnObj[seat[prop]]) {
      returnObj[seat[prop]].push(seat)
    } else {
      returnObj[seat[prop]] = [seat]
    }
  })
  return returnObj
}

const sortRows = rows => {
  const sortedSeats = {...rows}
  for (const key in sortedSeats) {
    sortedSeats[key].sort((a, b) => a.seat > b.seat)
  }
  return sortedSeats
}

const mapSeats = res => {
  const classes = groupBy(res, 'class')
  const seats = {}
  for (const key in classes) {
    seats[key] = sortRows(groupBy(classes[key], 'row'))
  }
  return seats
}

const SeatMap = () => {
  const [seats, setSeats] = useState([])

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

  console.log(seats)
  return (
    <div>Seat Map</div>
  )
}

export default SeatMap