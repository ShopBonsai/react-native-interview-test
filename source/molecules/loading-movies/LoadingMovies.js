import React from "react"
import { View } from "react-native"
import Shimmer from "react-native-shimmer"

import styles from "./LoadingMovies.styles"

const LoadingMovies = () => (
  <View style={styles.moviesContainer}>
    {[1, 2, 3, 4].map((item) => (
      <Shimmer animationOpacity={1} key={item} style={styles.shimmer}>
        <View style={styles.movieContainer}>
          <View>
            <View style={styles.movieCover} />
          </View>
          <View style={styles.movieInfo}>
            <View style={styles.movieTextA} />
            <View style={styles.movieTextB} />
            <View style={styles.movieTextC} />
          </View>
        </View>
      </Shimmer>
    ))}
  </View>
)

export default LoadingMovies
