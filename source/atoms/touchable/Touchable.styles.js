import { StyleSheet } from "react-native"

import theme from "../../config/styles.config"

export default StyleSheet.create({
  innerView: {
    padding: theme.contentPadding,
  },
  innerViewDisabled: {
    opacity: 0.75,
  },
})
