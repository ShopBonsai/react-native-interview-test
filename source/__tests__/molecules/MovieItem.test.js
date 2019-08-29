import React from "react"
import { TouchableWithoutFeedback } from "react-native"
import TestRenderer from "react-test-renderer"

import MovieItem from "../../molecules/MovieItem"
import movieListParsed from "../__mock__/movieListParsed"

describe("MovieItem Component", () => {
  it("should render MovieItem component", () => {
    const movieItemComponent = TestRenderer.create(<MovieItem movie={movieListParsed[0]} />)
    expect(movieItemComponent).toBeDefined()
  })

  it("should render the Prop Values", () => {
    const movieItemComponent = TestRenderer.create(<MovieItem movie={movieListParsed[0]} />)
    const movieItemInstance = movieItemComponent.root
    const textItems = movieItemInstance.findAllByType("Text")
    expect(textItems[0].children[0]).toBe(movieListParsed[0].title)
    expect(textItems[2].children[0]).toBe(movieListParsed[0].date)
    expect(textItems[4].children[0]).toBe(movieListParsed[0].genre.slice(0, 3).join(", "))
    expect(textItems[6].children[0]).toBe(movieListParsed[0].inventory.toString())
  })
  it("should render MovieItem component", () => {
    const onPressEvent = jest.fn()
    onPressEvent.mockReturnValue("Link on press invoked")
    const movieItemComponent = TestRenderer.create(
      <MovieItem movie={movieListParsed[0]} movieSelect={onPressEvent} />,
    )
    const movieItemInstance = movieItemComponent.root
    movieItemInstance.findByType(TouchableWithoutFeedback).props.onPress()
    expect(onPressEvent.mock.calls.length).toBe(1)
  })
})
