import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contentWrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    borderTopWidth: 1,
  },
  subTotalLabel: {
    paddingRight: 25,
    width: "70%",
    letterSpacing: 2,
  },
  subtotal: {
    width: "30%",
    textAlign: "right",
    letterSpacing: 1,
  },
});

export { styles };
