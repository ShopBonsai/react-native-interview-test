import React from 'react'
import PropTypes from 'prop-types'
import { CardMovieContainer, CardMovieContent, CardMovieImage } from './CardMovie.styles'

/**
 * The CardMovie it's responsible by to render the
 * card with an image (thumnal)
 *
 * @export {FUNCTION}
 * @param {Object} props
 * @returns {JSX.Element}
 */
export default function CardMovie(props) {
  // properties
  const { thumbnail } = props

  /**
   * The renderCardImage it's responsible by to render
   * the movie thumnail of the card
   *
   * @param {string} source
   * @returns {JSX.Element}
   */
  function renderCardImage(source) {
    return (
      <CardMovieImage source={{ uri: source }} />
    )
  }

  // main render
  return (
    <CardMovieContainer>
      <CardMovieContent>
        {renderCardImage(thumbnail)}
      </CardMovieContent>
    </CardMovieContainer>
  )
}

// define the default properties
CardMovie.defaultProps = {
  thumbnail: 'https://via.placeholder.com/120x150'
}

// validate the default properties
CardMovie.propTypes = {
  thumbnail: PropTypes.string
}
