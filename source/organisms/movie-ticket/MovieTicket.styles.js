import { StyleSheet } from "react-native"

import theme from "../../config/styles.config"

export default StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: "row",
  },
  movieInfo: {
    marginLeft: theme.contentPadding,
    flex: 1,
  },
  movieTitle: {
    fontWeight: "900",
  },
})
