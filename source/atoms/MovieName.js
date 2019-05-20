/*
 * @providesModule MovieName
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"

import styles from "./Styles/MovieNameStyle"

class MovieName extends Component {
  static propTypes = {
    name: PropTypes.string,
  }
  render() {
    const { name } = this.props
    return <Text style={styles.movieName}>{name}</Text>
  }
}

export default MovieName
