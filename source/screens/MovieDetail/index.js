import React from 'react'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'
import {
  MovieDetailContainer,
  MovieDetailContent,
  MovieDetailCover,
  MovieDetailTitle,
  MovieDetailPrice
} from './MovieDetail.styles'


/**
 * The getParamsFromNavigation it's responsible validate
 * and get a specific value from navigation
 *
 * @export {function}
 * @param {*} [navigation={}]
 * @param {*} key
 * @param {*} [valueDefault=null]
 * @returns {any}
 */
export function getParamsFromNavigation(navigation = {}, key, valueDefault = null) {
  return (
    navigation && Object.keys(navigation).length > 0 ? navigation.getParam(key, valueDefault) : null
  )
}

/**
 * the MovieDetail it's responsible by to render
 * the detail of movie
 *
 * @export
 * @param {*} props
 * @returns {JSX.Element}
 */
export default function MovieDetail(props) {
  const { navigation } = props
  const image = getParamsFromNavigation(navigation, 'image', 'https://via.placeholder.com/480x240')
  const title = getParamsFromNavigation(navigation, 'title', 'No title')
  const price = getParamsFromNavigation(navigation, 'price', 'Free')
  const genre = getParamsFromNavigation(navigation, 'genre', 'No listed')

  return (
    <MovieDetailContainer>
      <MovieDetailContent>
        <MovieDetailCover
          source={{
            uri: image, cache: FastImage.cacheControl.immutable
          }}
        />
        <MovieDetailTitle>{title}</MovieDetailTitle>
        <MovieDetailPrice>
          Price: U$
          {price}
        </MovieDetailPrice>
        <MovieDetailPrice>
          Genre:
          {genre}
        </MovieDetailPrice>
      </MovieDetailContent>
    </MovieDetailContainer>
  )
}

MovieDetail.defaultProps = {
  navigation: {}
}

MovieDetail.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.shape({})])
}
