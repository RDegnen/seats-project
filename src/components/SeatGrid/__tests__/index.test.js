import React from 'react'
import { shallow } from 'enzyme'

import SeatGrid from '../'
import { createLayout } from '../../../pages/SeatMap/utils'

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

const getComponent = props => shallow(
  <SeatGrid seats={createLayout(testSeats)} selectSeat={jest.fn()} />
)

describe('<SeatGrid />', () => {
  it('should match snapshot', () => {
    const component = getComponent()
    expect(component).toMatchSnapshot()
  })

  it('should add a header row to each class', () => {
    const component = getComponent()
    const headers = component.find('ClassHeader')
    const expectedFirstRow = [ 
      { seat: 'A', row: 3, class: 'First', occupied: true },
      { seat: 'B', row: 3, class: 'First', occupied: true },
    ]
    expect(headers.length).toBe(3)
    expect(headers.first().props().row).toEqual(expectedFirstRow)
    expect(
      headers
        .first()
        .dive()
        .find('Col')
        .first()
        .html()
        .toString())
        .toEqual('<div class="headerCol col">A</div>'
    )
  })
})