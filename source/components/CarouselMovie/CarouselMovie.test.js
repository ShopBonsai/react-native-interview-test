// libraries
import React from 'react'
import renderer from 'react-test-renderer'

// components
import CarouselMovide from './index'

it('Renders CarouselMovide correctly', () => {
  const tree = renderer
    .create(<CarouselMovide />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
