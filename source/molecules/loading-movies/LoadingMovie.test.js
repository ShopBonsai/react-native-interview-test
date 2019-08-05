import React from "react"
import TestRenderer from "react-test-renderer"

import LoadingMovies from "./LoadingMovies"

describe("LoadingMovie component", () => {
  it("should render without problems", () => {
    const LoadingMovieComponent = TestRenderer.create(<LoadingMovies />)
    const loadingMovieInstance = LoadingMovieComponent.root
    expect(loadingMovieInstance).toBeDefined()
  })
})
