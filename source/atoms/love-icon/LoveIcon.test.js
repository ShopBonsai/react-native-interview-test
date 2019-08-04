import React from "react"
import TestRenderer from "react-test-renderer"
import { Icon } from "react-native-elements"

import theme from "../../config/styles.config"

import LoveIcon from "./LoveIcon"

describe("LoveIcon component", () => {
  it("should render LoveIcon without any problem", () => {
    const loveIconComponent = TestRenderer.create(<LoveIcon />)
    const loveIconInstance = loveIconComponent.root
    expect(loveIconInstance).toBeDefined()
  })

  it("should render red heart filled if isLoved is true", () => {
    const loveIconComponent = TestRenderer.create(<LoveIcon isLoved />)
    const loveIconInstance = loveIconComponent.root
    expect(loveIconInstance.findByType(Icon).props.color).toBe(theme.brandDanger)
    expect(loveIconInstance.findByType(Icon).props.name).toBe("heart")
  })

  it("should render red hear not filled if isLoved is false", () => {
    const loveIconComponent = TestRenderer.create(<LoveIcon />)
    const loveIconInstance = loveIconComponent.root
    expect(loveIconInstance.findByType(Icon).props.color).toBe(theme.brandDanger)
    expect(loveIconInstance.findByType(Icon).props.name).toBe("heart-outline")
  })
})
