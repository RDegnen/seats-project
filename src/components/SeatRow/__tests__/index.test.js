import React from 'react'
import { shallow } from 'enzyme'

import SeatRow from '../'

const row = [ 
  { seat: 'A', row: 3, class: 'First', occupied: true },
  { seat: 'B', row: 3, class: 'First', occupied: true },
]

const getComponent = props => shallow(
  <SeatRow row={row} selectSeat={jest.fn()} {...props} />
)

describe('<SeatRow />', () => {
  it('should match snapshot', () => {
    const component = getComponent()
    expect(component).toMatchSnapshot()
  })
})