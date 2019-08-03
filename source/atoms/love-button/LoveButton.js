import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import { Icon } from "react-native-vector-icons"

import Touchable from "../touchable/Touchable"

import styles, { heartColor } from "./LoveButton.styles"

const LoveButton = ({ isLoved, ...attributes }) => (
  <Touchable {...attributes}>
    <View style={styles.rootView}>
      {isLoved ? <Icon name="heart" color={heartColor} /> : <Icon name="heart-outline" />}
    </View>
  </Touchable>
)

LoveButton.propTypes = {
  isLoved: PropTypes.bool,
  ...Touchable.propTypes,
}

LoveButton.defaultProps = {
  isLoved: false,
}

export default LoveButton
