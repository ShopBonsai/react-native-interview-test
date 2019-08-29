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
  value: PropTypes.string,
}
export default MovieDetailItem
