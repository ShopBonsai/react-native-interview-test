import React from "react"
import TestRenderer from "react-test-renderer"

import MovieDetailItem from "../../molecules/MovieDetailItem"

describe("MovieDetailItem Component", () => {
  it("should render MovieDetailItem component", () => {
    const movieDetailItemComponent = TestRenderer.create(<MovieDetailItem />)
    expect(movieDetailItemComponent).toBeDefined()
  })

  it("should render the Prop Values", () => {
    const movieDetailItemComponent = TestRenderer.create(
      <MovieDetailItem label="testLabel" value="testValue" />,
    )
    const movieDetailItemInstance = movieDetailItemComponent.root
    expect(movieDetailItemInstance.findAllByType("Text")[0].children[0]).toBe("testLabel")
    expect(movieDetailItemInstance.findAllByType("Text")[1].children[0]).toBe("testValue")
  })
})
