import React from "react"
import TestRenderer from "react-test-renderer"

import withHeader from "./withHeader"

describe("withHeader", () => {
  it("should render without any problem", () => {
    const WithHeaderComponent = withHeader("as")
    const childComponent = TestRenderer.create(<WithHeaderComponent />)
    expect(WithHeaderComponent).toBeDefined()
    expect(childComponent).toBeDefined()
  })
})
