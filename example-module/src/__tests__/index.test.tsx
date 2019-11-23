import React from 'react'
import { shallow } from 'enzyme'
import ExampleModule from '..'

describe('<ExampleModule />', () => {
  it('should render', () => {
    const props = {}
    const wrapper = shallow(<ExampleModule {...props} />)
    expect(wrapper).toBeDefined()
  })
})