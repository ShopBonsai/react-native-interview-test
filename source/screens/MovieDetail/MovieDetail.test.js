// libraries
import React from 'react'
import renderer from 'react-test-renderer'
import MovieDetail from './index'

// components
import withProviders from '../../containers/withProviders'

it('Renders MovieDetail correctly', () => {
  const Component = withProviders(MovieDetail)
  const tree = renderer
    .create(<Component />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
