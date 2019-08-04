import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get("screen")

export default StyleSheet.create({
  movieCover: {
    backgroundColor: "#eee",
    height: 120,
    width: 80,
  },
  moviesContainer: {
    width,
    height,
  },
  movieContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  movieTextA: {
    width: "100%",
    backgroundColor: "#eee",
    height: 24,
  },
  movieTextB: {
    width: "80%",
    backgroundColor: "#eee",
    height: 24,
    marginTop: 12,
  },
  movieTextC: {
    width: "60%",
    backgroundColor: "#eee",
    height: 24,
    marginTop: 12,
  },
  shimmer: {
    margin: 12,
  },
  movieInfo: { flex: 1, marginLeft: 12 },
})
