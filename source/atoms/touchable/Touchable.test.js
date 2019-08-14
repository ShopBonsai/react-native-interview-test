import React from "react"
import TestRenderer from "react-test-renderer"

import Touchable from "./Touchable"

describe("LoveIcon component", () => {
  beforeEach(() => {
    jest.mock("Platform", () => ({
      OS: "android",
      VERSION: 21,
    }))
  })

  it("should render Touchable without any problem", () => {
    const touchableComponent = TestRenderer.create(<Touchable>dummy</Touchable>)
    const touchableInstance = touchableComponent.root
    expect(touchableInstance).toBeDefined()
  })

  it("should render View", () => {
    const touchableComponent = TestRenderer.create(<Touchable>dummy</Touchable>)
    const touchableInstance = touchableComponent.root
    expect(touchableInstance.findByType("View")).toBeDefined()
  })
})
