import React from "react"
import PropTypes from "prop-types"
import { View, ActivityIndicator } from "react-native"

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}
/**
 * Spinner Component to show loading.
 *
 * @param {string} size - To set the size of the spinner.
 * @returns {element} ActivityIndicator.
 */
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || "large"} />
    </View>
  )
}
Spinner.propTypes = {
  size: PropTypes.string,
}
export default Spinner
