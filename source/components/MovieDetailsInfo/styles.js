import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  thumbnailImage: {
    height: 250,
  },
  contentWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 50,
  },
  title: { fontWeight: "600", fontSize: 24, marginBottom: 2 },
  titleSpacer: { backgroundColor: "#000", height: 2, width: "10%", marginTop: 15, marginBottom: 15 },
  stockStyles: { color: "red" },
  checkoutWrapper: {
    marginTop: 25,
  },
  alreadyInCartWrapper: {
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    marginTop: 25,
  },
  alreadyInCartText: {
    paddingTop: 11,
    paddingBottom: 11,
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "600",
  },
});

export { styles };
