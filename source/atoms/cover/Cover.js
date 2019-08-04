import React from "react"
import PropTypes from "prop-types"
import { View, ActivityIndicator } from "react-native"
import { Image } from "react-native-elements"

import styles from "./Cover.styles"

const Cover = (props) => {
  const { uri } = props
  const localUri = "https://dummyimage.com/80x120.jpg&text=COVER"
  return (
    <View style={styles.coverView}>
      <Image
        style={styles.image}
        source={{ uri: uri || localUri }}
        PlaceholderContent={<ActivityIndicator />}
        resizeMode="contain"
      />
    </View>
  )
}

Cover.propTypes = {
  uri: PropTypes.string,
}

export default Cover
