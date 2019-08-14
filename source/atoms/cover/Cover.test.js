import React from "react"
import TestRenderer from "react-test-renderer"

import Cover from "./Cover"

describe("Cover Component", () => {
  it("should render Cover component", () => {
    const coverComponent = TestRenderer.create(<Cover />)
    expect(coverComponent).toBeDefined()
  })

  it("should render the Image component with URL http://image.com", () => {
    const coverComponent = TestRenderer.create(<Cover uri="http://image.com" />)
    const coverInstance = coverComponent.root
    expect(coverInstance.findByType("Image").props.source.uri).toBe("http://image.com")
  })
})
