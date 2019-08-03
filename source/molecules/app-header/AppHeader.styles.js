import { StyleSheet, Platform } from "react-native"

export default StyleSheet.create({
  headerOuterContainer: {
    zIndex: 1,
    backgroundColor: "#2678fb",
    paddingTop: Platform.OS === "ios" ? 35 : 42,
    justifyContent: "space-around",
    ...Platform.select({
      android: {
        height: 87,
      },
      ios: {
        height: 75,
      },
    }),
  },
  headerInnerContainer: {
    alignItems: "center",
  },
  headerLogoText: {
    fontSize: 22,
    color: "white",
    fontWeight: "900",
  },
})
