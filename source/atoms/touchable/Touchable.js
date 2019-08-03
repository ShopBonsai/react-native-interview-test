import React from "react"
import PropTypes from "prop-types"
import { TouchableNativeFeedback, TouchableOpacity, Platform, View, StyleSheet } from "react-native"

import styles from "./Touchable.styles"

// Native component is going to be used in the render
const NativeComponent = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity

const Touchable = (props) => {
  const { children, disabled, ...attributes } = props
  const innerViewStyles = [styles.innerView, disabled && styles.innerViewDisabled]

  // Get the most of React Native
  if (Platform.OS === "android" && !attributes.background) {
    if (Platform.VERSION >= 21) {
      attributes.background = TouchableNativeFeedback.Ripple("ThemeAttrAndroid", true)
    } else {
      attributes.background = TouchableNativeFeedback.SelectableBackground()
    }
  }
  return (
    <NativeComponent activeOpacity={0.75} disabled={disabled} {...attributes}>
      <View style={StyleSheet.flatten(innerViewStyles)}>{children}</View>
    </NativeComponent>
  )
}

Touchable.propTypes = {
  children: PropTypes.node.isRequired,
  ...TouchableNativeFeedback.propTypes,
  ...TouchableOpacity.propTypes,
}

Touchable.defaultProps = {
  ...TouchableNativeFeedback.defaultProps,
  ...TouchableOpacity.defaultProps,
}

export default Touchable
