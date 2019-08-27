// libraries
import React from 'react'
import renderer from 'react-test-renderer'

// components
import Feed from './index'

it('Renders Feed correctly', () => {
  const tree = renderer
    .create(<Feed />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
