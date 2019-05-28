/*
 * @providesModule MovieDetails
 */

import React, { Component } from "react"
import { View } from "react-native"
import PropTypes from "prop-types"

import MovieName from "../atoms/MovieName"
import MovieGenre from "../atoms/MovieGenre"
import Inventory from "../atoms/Inventory"
import Price from "../atoms/Price"

import styles from "./Styles/MovieDetailsStyle"

class MovieDetails extends Component {
  static propTypes = {
    movie: PropTypes.any,
  }

  render() {
    const { movie } = this.props
    return (
      <View style={styles.viewTopDetail}>
        <MovieName name={movie.title} />
        <MovieGenre genre={movie.genre} />
        <Inventory inventory={movie.inventory} />
        <Price price={movie.price} />
      </View>
    )
  }
}

export default MovieDetails
