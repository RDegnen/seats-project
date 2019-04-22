import React from 'react'
import { shallow } from 'enzyme'

import SeatMap from '../'

global.fetch = jest.fn(() => new Promise(resolve => resolve()));

const getComponent = props => shallow(<SeatMap {...props} />)

describe('<SeatMap />', () => {
  it('should match snapshot', () => {
    const component = getComponent()
    expect(component).toMatchSnapshot()
  })
})