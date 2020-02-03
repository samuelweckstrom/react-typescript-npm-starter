import React from 'react'
import { shallow } from 'enzyme'
import Package from '..'

describe('<Package />', () => {
  it('should render', () => {
    const props = {}
    const wrapper = shallow(<Package {...props} />)
    expect(wrapper).toBeDefined()
  })
})