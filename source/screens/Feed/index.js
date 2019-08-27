import React from 'react'

import CardMovie from '../../components/CardMovie'
import { FeedContainer } from './Feed.styles'
import CarouselMovie from '../../components/CarouselMovie'

/**
 * @export {Fucntion}
 * @returns {JSX.Element}
 */
export default function Feed() {
  function renderCarousel() {
    const items = [
      <CardMovie key="1" />,
      <CardMovie key="2" />,
      <CardMovie key="3" />,
      <CardMovie key="4" />,
      <CardMovie key="5" />
    ]

    return (
      <CarouselMovie items={items} />
    )
  }
  return (
    <FeedContainer>
      {renderCarousel()}
    </FeedContainer>
  )
}
