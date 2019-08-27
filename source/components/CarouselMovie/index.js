import React from 'react'
import PropTypes from 'prop-types'
import {
  CarouselMovieContainer,
  CarouselMovieContent
} from './CarouselMovie.styles'
import CardMovie from '../CardMovie'


/**
 * The CarouselMovie it's responsible by
 * to render a list of  item on vertical position
 *
 * @export {function}
 * @returns {JSX.Element}
 */
export default function CarouselMovie(props) {
  const { items } = props

  function renderCarouselContent() {
    return (
      <CarouselMovieContent
        horizontal
        data={items}
        renderItem={({ item }) => item }
      />
    )
  }

  return (
    <CarouselMovieContainer>
      {renderCarouselContent()}
    </CarouselMovieContainer>
  )
}


CarouselMovie.defaultProps = {
  items: []
}

CarouselMovie.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ type: CardMovie }))
}
