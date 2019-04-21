export const groupBy = (seats, prop) => {
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

export const sortRows = rows => {
  const sortedSeats = {...rows}
  for (const key in sortedSeats) {
    sortedSeats[key].sort((a, b) => a.seat > b.seat)
  }
  return sortedSeats
}

export const mapSeats = res => {
  const classes = groupBy(res, 'class')
  const seats = {}
  for (const key in classes) {
    seats[key] = sortRows(groupBy(classes[key], 'row'))
  }
  return seats
}