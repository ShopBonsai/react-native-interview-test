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
  checkoutWrapper: {
    marginTop: 25,
  },
});

export { styles };
