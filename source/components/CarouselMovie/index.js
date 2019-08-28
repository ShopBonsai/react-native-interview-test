import React from 'react'
import PropTypes from 'prop-types'
import {
  CarouselMovieContainer,
  CarouselMovieContent,
  CarouselMovieTitle
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
  const { items, title } = props

  // Main return
  return (
    <CarouselMovieContainer>
      <CarouselMovieTitle>{title}</CarouselMovieTitle>
      <CarouselMovieContent
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => item }
      />
    </CarouselMovieContainer>
  )
}

// default values
CarouselMovie.defaultProps = {
  items: [],
  title: 'Title carousel'
}

// prop validation
CarouselMovie.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ type: CardMovie })),
  title: PropTypes.string
}
