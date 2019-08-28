// libraries
import React from 'react'
import renderer from 'react-test-renderer'

// components
import Feed, { renderCarousel, renderCarouselItems } from './index'
import withProviders from '../../containers/withProviders'
import CarouselMovie from '../../components/CarouselMovie'

describe('Feed Screen', () => {
  it('Renders Feed correctly', () => {
    const Component = withProviders(Feed)
    const tree = renderer
      .create(<Component />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Test the renderCarousel of feed screen when the params are empty', async () => {
    expect(renderCarousel()).toBe(null)
  })
  it('Test the renderCarouselItems of feed screen when the params are empty', async () => {
    expect(renderCarouselItems()).toBe(null)
  })

  it('Test the renderCarousel of feed screen with the correct parms', async () => {
    const item = {
      genre: 'genre',
      key: 'key',
      items: []
    }
    const Carousel = renderCarousel({ item })
    expect(Carousel).toMatchSnapshot()
    expect(Carousel.type(item)).toBeInstanceOf(Object)
    expect(Carousel.type).toEqual(CarouselMovie)
  })
})
