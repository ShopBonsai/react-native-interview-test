import React from "react"
import { View, StyleSheet, Dimensions } from "react-native"
import Shimmer from "react-native-shimmer"

const { height, width } = Dimensions.get("screen")

const styles = StyleSheet.create({
  movieCover: {
    backgroundColor: "#eee",
    height: 160,
    width: width / 2 - 32,
  },
  movieContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width,
    height,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  shimmer: {
    margin: 16,
  },
})

const LoadingMovies = () => (
  <View style={styles.movieContainer}>
    <Shimmer style={styles.shimmer}>
      <View style={styles.movieCover} />
    </Shimmer>
    <Shimmer style={styles.shimmer}>
      <View style={styles.movieCover} />
    </Shimmer>
    <Shimmer style={styles.shimmer}>
      <View style={styles.movieCover} />
    </Shimmer>
    <Shimmer style={styles.shimmer}>
      <View style={styles.movieCover} />
    </Shimmer>
    <Shimmer style={styles.shimmer}>
      <View style={styles.movieCover} />
    </Shimmer>
    <Shimmer style={styles.shimmer}>
      <View style={styles.movieCover} />
    </Shimmer>
  </View>
)

export default LoadingMovies
