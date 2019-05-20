/*
 * @providesModule MovieCards
 */

import React, { Component } from "react"
import { View } from "react-native"
import PropTypes from "prop-types"

import TopImage from "../atoms/TopImage"
import MovieDetails from "../molecules/MovieDetails"

import styles from "./Styles/MovieCardsStyle"

class MovieCards extends Component {
  static propTypes = {
    movie: PropTypes.any,
  }

  render() {
    const { movie } = this.props
    return (
      <View style={styles.viewCardFlatList}>
        <TopImage movie={movie} />
        <MovieDetails movie={movie.item} />
      </View>
    )
  }
}

export default MovieCards
