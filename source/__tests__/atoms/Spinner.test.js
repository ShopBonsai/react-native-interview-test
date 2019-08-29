import React from "react"
import TestRenderer from "react-test-renderer"

import { Spinner } from "../../atoms"

describe("Spinner Component", () => {
  it("should render Spinner component", () => {
    const spinnerComponent = TestRenderer.create(<Spinner />)
    expect(spinnerComponent).toBeDefined()
  })

  it("should render the prop size", () => {
    const spinnerComponent = TestRenderer.create(<Spinner size="small" />)
    const spinnerInstance = spinnerComponent.root
    expect(spinnerInstance.findByType("ActivityIndicator").props.size).toBe("small")
  })
})
