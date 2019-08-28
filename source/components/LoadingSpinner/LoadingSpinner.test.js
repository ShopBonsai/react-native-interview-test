// libraries
import React from 'react'
import renderer from 'react-test-renderer'
import LoadingSpinner from './index'


it('Renders LoadingSpinner correctly', () => {
  const tree = renderer
    .create(<LoadingSpinner />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
