// libraries
import React from 'react'
import renderer from 'react-test-renderer'
import CardMovie from './index'

// components

it('Renders CardMovie correctly', () => {
  const tree = renderer
    .create(<CardMovie />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
