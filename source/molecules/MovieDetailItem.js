import React from "react"
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

const MovieDetailItem = props => {
  const { label, value } = props
  return (
    <View style={style.detailRow}>
      <Text style={style.detailedTextStyle}>{label}</Text>
      <Text>{value}</Text>
    </View>
  )
}

export default MovieDetailItem
