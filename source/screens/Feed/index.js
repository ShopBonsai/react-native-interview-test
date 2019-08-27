import React from 'react'

import CardMovie from '../../components/CardMovie'
import { FeedContainer } from './Feed.styles'

/**
 * @export {Fucntion}
 * @returns {JSX.Element}
 */
export default function Feed() {
  return (
    <FeedContainer>
      <CardMovie />
    </FeedContainer>
  )
}
