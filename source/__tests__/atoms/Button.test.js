import React from "react"
import TestRenderer from "react-test-renderer"

import { Button } from "../../atoms"

describe("Button Component", () => {
  it("should render Button component", () => {
    const buttonComponent = TestRenderer.create(<Button />)
    expect(buttonComponent).toBeDefined()
  })

  it("should render the Child Text", () => {
    const buttonComponent = TestRenderer.create(<Button>test</Button>)
    const buttonInstance = buttonComponent.root
    expect(buttonInstance.findByType("Text").children[0]).toBe("test")
  })
})
