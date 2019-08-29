import React from "react"
import PropTypes from "prop-types"
import { Text, View } from "react-native"

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
  },
  textStyle: {
    fontSize: 20,
  },
}
/**
 * Header with the title.
 *
 * @param {string} headerText - Title for the header.
 * @returns {element} With Header.
 */
const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  )
}
Header.propTypes = {
  headerText: PropTypes.string,
}
export default Header
