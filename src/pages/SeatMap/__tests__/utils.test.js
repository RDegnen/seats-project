import { 
  groupBy, 
  sortRows, 
  addAisles,
} from '../utils'

import { classes } from '../../../constants'

const testSeats = [
  {
    "seat": "B",
    "row": 3,
    "class": "First",
    "occupied": true
  },
  {
    "seat": "D",
    "row": 21,
    "class": "Economy",
    "occupied": false
  },
  {
    "seat": "C",
    "row": 12,
    "class": "Business",
    "occupied": true
  },
  {
    "seat": "A",
    "row": 3,
    "class": "First",
    "occupied": true
  },
  {
    "seat": "J",
    "row": 21,
    "class": "Economy",
    "occupied": false
  },
  {
    "seat": "F",
    "row": 12,
    "class": "Business",
    "occupied": false
  },
  {
    "seat": "A",
    "row": 21,
    "class": "Economy",
    "occupied": true
  },
]

describe('utils', () => {
  it('should group by classes', () => {
    const group = groupBy(testSeats, 'class')
    const keys = Object.keys(group)
    expect(keys).toContain(classes.FIRST)
    expect(keys).toContain(classes.BUSINESS)
    expect(keys).toContain(classes.ECONOMY)
  })

  it('should sort rows', () => {
    const expectedOrder = [ 
      { seat: 'A', row: 21, class: 'Economy', occupied: true },
      { seat: 'D', row: 21, class: 'Economy', occupied: false },
      { seat: 'J', row: 21, class: 'Economy', occupied: false }
    ]
    const group = groupBy(testSeats, 'class')
    sortRows(group)
    expect(group[classes.ECONOMY][0]).toEqual(expectedOrder[0])
  })

  it('should add aisles', () => {
    const planeClass = {
      21: [ 
        { seat: 'A', row: 21, class: 'Economy', occupied: true },
        { seat: 'B', row: 21, class: 'Economy', occupied: false },
        { seat: 'D', row: 21, class: 'Economy', occupied: false },
        { seat: 'E', row: 21, class: 'Economy', occupied: false }
      ]
    }
    addAisles(planeClass)
    expect(planeClass[21][2].aisle).toBe(true)
  })
})