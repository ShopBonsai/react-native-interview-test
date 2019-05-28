/*
 * @providesModule MovieGenre
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"

import styles from "./Styles/MovieGenreStyle"

class MovieGenre extends Component {
  static propTypes = {
    genre: PropTypes.string,
  }
  render() {
    const { genre } = this.props
    return (
      <Text numberOfLines={2} style={styles.movieGenre}>
        {genre}
      </Text>
    )
  }
}

export default MovieGenre
