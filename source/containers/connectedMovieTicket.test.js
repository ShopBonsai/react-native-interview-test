import React from "react"
import TestRenderer from "react-test-renderer"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

import ConnectedMovieTicket, { mapDispatchToProps, mapStateToProps } from "./connectedMovieTicket"

let mockedStore

describe("connectedMovieTicket", () => {
  beforeEach(() => {
    const middleware = [thunk]
    const mockStore = configureMockStore(middleware)
    mockedStore = mockStore({ favoritedMoviesStore: { favoritedMovies: [] } })
  })

  it("should render without any problem", () => {
    const connectedMovieTicket = TestRenderer.create(
      <ConnectedMovieTicket store={mockedStore} item={{ genres: [] }} />,
    )
    const connectedMovieTicketIn = connectedMovieTicket.root
    expect(connectedMovieTicketIn).toBeDefined()
  })

  it("should execute the actions without problem", () => {
    const actionsObject = mapDispatchToProps(() => {}, { item: { id: "" } })
    jest.spyOn(actionsObject.actions, "setFavoritedMovie")
    jest.spyOn(actionsObject.actions, "unsetFavoritedMovie")
    actionsObject.actions.setFavoritedMovie()
    actionsObject.actions.unsetFavoritedMovie()
    expect(actionsObject.actions.setFavoritedMovie).toBeCalled()
    expect(actionsObject.actions.unsetFavoritedMovie).toBeCalled()
  })

  it("should return true when id is in the array", () => {
    const stateObject = mapStateToProps(
      { favoritedMoviesStore: { favoritedMovies: ["id"] } },
      { item: { id: "id" } },
    )
    expect(stateObject.isFavorited).toBe(true)
  })

  it("should return false when id is not in the array", () => {
    const stateObject = mapStateToProps(
      { favoritedMoviesStore: { favoritedMovies: ["ids"] } },
      { item: { id: "id" } },
    )
    expect(stateObject.isFavorited).toBe(false)
  })
})
