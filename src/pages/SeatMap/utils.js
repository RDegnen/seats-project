// Group seats into objects based off seat properties
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
// Sort the seats in a row
export const sortRows = rows => {
  const sortedSeats = {...rows}
  for (const key in sortedSeats) {
    sortedSeats[key].sort((a, b) => a.seat > b.seat)
  }
  return sortedSeats
}
// Add ailes to all rows
export const addAisles = planeClass => {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  Object.keys(planeClass).forEach(key => {
    const row = planeClass[key]
    for (let i = 0; i < row.length; i++) {
      if (row[i].seat !== alpha.charAt(i)) {
        row.splice(i, 0, { 
          row: parseInt(key),
          seat: alpha.charAt(i),
          aisle: true 
        })
      }
    }
  })
}
// Create the seat layout 
export const createLayout = res => {
  const classes = groupBy(res, 'class')
  const seats = {}
  for (const key in classes) {
    seats[key] = sortRows(groupBy(classes[key], 'row'))
  }
  Object.keys(seats).map(key => addAisles(seats[key]))
  return seats
}