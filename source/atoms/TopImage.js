/*
 * @providesModule TopImage
 */

import React, { Component } from "react"
import { CachedImage } from "react-native-cached-image"
import PropTypes from "prop-types"

import styles from "./Styles/TopImageStyle"

class TopImage extends Component {
  static propTypes = {
    movie: PropTypes.any,
  }

  render() {
    const { image } = this.props.movie.item
    return <CachedImage source={{ uri: image }} resizeMode="cover" style={styles.topImage} />
  }
}

export default TopImage
