import {Dimensions, StyleSheet} from "react-native";
const {width} = Dimensions.get("window");
import colors from "./colors";

export default StyleSheet.create({
  navTitle:{
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "bold",
  },
  movieTitle: {
    fontSize: 18,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: colors.black,
    marginRight: 10,
    },
  genre: {
    fontSize: 14,
    fontFamily: "Arial",
    fontWeight: "normal",
    color: colors.darkGray,
    marginRight: 10,
  },
});
