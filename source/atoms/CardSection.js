import React from "react"
import { View } from "react-native"

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderColor: "#ddd",
    position: "relative",
  },
}
/**
 * Card Section container Component.
 *
 * @param {element} children - Any element to be viewed in Card Section container.
 * @returns {element} With View container.
 */
const CardSection = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>
}

export default CardSection
