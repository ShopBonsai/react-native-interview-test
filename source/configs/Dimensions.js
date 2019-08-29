import { Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const dim = {
  dim1x: 6,
  dim2x: 12,
  dim3x: 18,
  dim4x: 24,
  dim5x: 30,
  dim6x: 36,
  dim8x: 48,
  dim10x: 60,
  dim12x: 72,

  radius1x: 2,
  radius2x: 4,
  radius3x: 8,
  radius4x: 12,
  radius5x: 16,

  screenWidth: width,
  screenHeight: height,
}

export default dim
