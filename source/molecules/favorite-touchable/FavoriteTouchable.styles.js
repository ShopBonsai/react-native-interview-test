import { StyleSheet } from "react-native"

import theme from "../../config/styles.config"

export default StyleSheet.create({
  rootView: {
    flex: 1,
    width: theme.contentPadding * 4,
    height: theme.contentPadding * 2,
  },
  favoriteText: {
    color: theme.brandDark,
  },
  favoriteTextFavorited: {
    color: theme.brandPrimary,
  },
})
