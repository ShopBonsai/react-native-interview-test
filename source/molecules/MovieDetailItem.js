import React from "react"
import PropTypes from "prop-types"
import { View, Text } from "react-native"

const style = {
  detailRow: {
    flex: 1,
    flexDirection: "row",
  },
  detailedTextStyle: {
    fontWeight: "bold",
  },
}
/**
 * MovieDetailItem, to show the single item with label and text.
 *
 * @param {string} label - Label text.
 * @param {any} value - Text value to show against label.
 * @returns {element} Single item with label and text.
 */
const MovieDetailItem = ({ label, value }) => {
  return (
    <View style={style.detailRow}>
      <Text style={style.detailedTextStyle}>{label}</Text>
      <Text>{value}</Text>
    </View>
  )
}
MovieDetailItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
export default MovieDetailItem
