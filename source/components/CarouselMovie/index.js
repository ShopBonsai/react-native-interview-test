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

  /**
   * The renderCarouselTitle()
   * It's responsible by to render the title of carousel
   *
   * @returns {JSX.Element}
   */
  function renderCarouselTitle() {
    return (
      <CarouselMovieTitle>
        {title}
      </CarouselMovieTitle>
    )
  }
  /**
   * The renderCarouselContent it's responsible
   * by to render the content of the carousel
   * @returns  {JSX.Element}
   */
  function renderCarouselContent() {
    return (
      <CarouselMovieContent
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => item }
      />
    )
  }

  // Main return
  return (
    <CarouselMovieContainer>
      {renderCarouselTitle()}
      {renderCarouselContent()}
    </CarouselMovieContainer>
  )
}

// default values
CarouselMovie.defaultProps = {
  items: [],
  title: 'Title carousel'
}

CarouselMovie.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ type: CardMovie })),
  title: PropTypes.string
}
