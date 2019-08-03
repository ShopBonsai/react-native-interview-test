import React from "react"
import PropTypes from "prop-types"
import { View, ActivityIndicator } from "react-native"
import { Image } from "react-native-elements"

import styles from "./Cover.styles"

const Cover = (props) => {
  const { uri } = props
  return (
    <View style={styles.coverView}>
      <Image source={{ uri }} PlaceholderContent={<ActivityIndicator />} />
    </View>
  )
}

Cover.propTypes = {
  uri: PropTypes.string,
}

export default Cover
