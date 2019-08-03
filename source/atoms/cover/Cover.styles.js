import { StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get("screen")

export default StyleSheet.create({
  coverView: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 160,
    width: width / 2 - 32,
  },
})
