import React from "react"
import TestRenderer from "react-test-renderer"

import withSafeArea from "./withSafeArea"

describe("withSafeArea", () => {
  it("should render without any problem", () => {
    const WithSafeAreaComponent = withSafeArea("as")
    const childComponent = TestRenderer.create(<WithSafeAreaComponent />)
    expect(WithSafeAreaComponent).toBeDefined()
    expect(childComponent).toBeDefined()
  })
})
