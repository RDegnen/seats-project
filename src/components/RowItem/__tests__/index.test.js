import React from 'react'
import { shallow } from 'enzyme'

import RowItem from '../'
import { colors } from '../../../constants'

const seats = [ 
  { seat: 'A', row: 3, class: 'First', occupied: true },
  { seat: 'B', row: 3, class: 'First', aisle: true },
  { seat: 'C', row: 3, class: 'First', occupied: false },
  { seat: 'D', row: 3, class: 'First', selected: true, occupied: false },
]

const getComponent = props => 
  shallow(<RowItem {...props} selectSeat={jest.fn()} />)

describe('<RowItem />', () => {
  seats.forEach(seat => {
    it('should match snapshot', () => {
      const component = getComponent({ item: seat })
      expect(component).toMatchSnapshot()
    })
  })

  it('should render an Aisle', () => {
    const component = getComponent({ item: seats[1] })
    expect(component.find('Aisle')).toBeTruthy()
  })

  it('should properly color a seat', () => {
    const occupiedSeat = getComponent({ item: seats[0] })
    const availableSeat = getComponent({ item: seats[2] })
    const selectedSeat = getComponent({ item: seats[3] })
    expect(
      occupiedSeat
        .find('Seat')
        .dive()
        .prop('style')
      ).toHaveProperty('backgroundColor', colors.LIGHT_GREY)

    expect(
      availableSeat
        .find('Seat')
        .dive()
        .prop('style')
      ).toHaveProperty('backgroundColor', colors.LOLA_BLUE)

    expect(
      selectedSeat
        .find('Seat')
        .dive()
        .prop('style')
      ).toHaveProperty('backgroundColor', colors.LOLA_PINK)
  })
})