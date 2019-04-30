import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
  },
  thumbnailImage: {
    height: 200,
  },
  contentWrapper: {
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: { paddingBottom: 2, fontWeight: "600" },
  infoWrapper: { flexDirection: "row", justifyContent: "space-between" },
});

export { styles };
