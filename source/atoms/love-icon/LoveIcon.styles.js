import { StyleSheet } from "react-native"

import theme from "../../config/styles.config"

export default StyleSheet.create({
  rootView: {
    width: theme.contentPadding * 2,
    height: theme.contentPadding * 2,
  },
})

export const heartColor = theme.brandDanger
