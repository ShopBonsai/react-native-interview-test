import { Dimensions, Platform } from "react-native"

const platform = Platform.OS
const { height, width } = Dimensions.get("window")

const colors = {
  primary: "#2678fb",
  secondary: "#1a61d2",
  opposite: "#FFFFFF",
  oppositeActive: "#95b4f8",
  light: "#a0c2f8",
  danger: "#df4128",
  success: "#34bb35",
  ultraLight: "#dfecff",
  black: "#4a4a4a",
  gray: "#9b9b9b",
}

export default {
  brandPrimary: colors.primary,
  brandPrimaryDark: colors.secondary,
  brandOpposite: colors.opposite,
  brandOppositeActive: colors.oppositeActive,
  brandDanger: colors.danger,
  brandSuccess: colors.success,
  brandDark: colors.black,
  brandGray: colors.gray,
  toolbarDefaultBg: colors.primary,
  toolbarBtnColor: colors.ultraLight,
  titleFontColor: colors.ultraLight,
  listsBorderBottomColor: colors.ultraLight,
  inputBorderColor: colors.primary,
  inputHeightBase: 100,
  itemMarginVertical: 10,
  viewHeight: height,
  viewWidth: width,
  contentPadding: 12,
  drawerWidth: 300,
  brandLight: colors.light,
  brandSecondary: colors.secondary,
  buttonHeight: 59,

  // Font
  DefaultFontSize: 16,
  linksFontSize: 17,
  fontFamily: platform === "ios" ? "System" : "Roboto",
  fontSizeBase: 15,
  fontSizeError: 13,
  cardElevation: 5,
  cardShadowRadius: 9,
}
