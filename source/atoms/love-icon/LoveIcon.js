import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import { Icon } from "react-native-elements"

import styles, { heartColor } from "./LoveIcon.styles"

const LoveIcon = ({ isLoved }) => (
  <View style={styles.rootView}>
    {isLoved ? (
      <Icon type="material-community" name="heart" color={heartColor} />
    ) : (
      <Icon type="material-community" name="heart-outline" color={heartColor} />
    )}
  </View>
)

LoveIcon.propTypes = {
  isLoved: PropTypes.bool,
}

LoveIcon.defaultProps = {
  isLoved: false,
}

export default LoveIcon
