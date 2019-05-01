import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contentWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  thumbnail: { height: 50, width: 50 },
  titleWrapper: { width: "50%", justifyContent: "center" },
  title: { textAlign: "center" },
  priceWrapper: { justifyContent: "center" },
  price: { letterSpacing: 1 },
});

export { styles };
