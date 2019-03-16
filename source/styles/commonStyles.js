import {Dimensions, StyleSheet} from "react-native";
const {width} = Dimensions.get("window");
import colors from "./colors";

export default StyleSheet.create({
  line:{
    marginTop: 10,
    height: 2,
    backgroundColor: colors.lightGray,
    width: width,
  },
  icon:{
    resizeMode: "contain",
    width: 25,
    height: 22,
  }
});
