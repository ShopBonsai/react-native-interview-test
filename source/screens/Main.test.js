import React from "react"
import TestRenderer from "react-test-renderer"
import { shallow } from "enzyme"

import Main from "./Main"

const defaultProps = {
  store: { data: [], fetching: false },
  actions: { getMovieTickets: jest.fn },
}

describe("MainScreen component", () => {
  let mainComponent
  let mainShallowed
  let instanceShallowed

  beforeEach(() => {
    mainComponent = TestRenderer.create(
      <Main store={{ data: [], fetching: true }} actions={{ getMovieTickets: jest.fn }} />,
    )
    mainShallowed = shallow(<Main {...defaultProps} />)
    instanceShallowed = mainShallowed.instance()
  })

  it("should render without any problem", () => {
    const mainInstance = mainComponent.root
    expect(mainInstance).toBeDefined()
  })

  it("should render without any problem if is not fetching", () => {
    const mainComponentCopy = TestRenderer.create(
      <Main store={{ data: [], fetching: false }} actions={{ getMovieTickets: jest.fn }} />,
    )
    const mainInstance = mainComponentCopy.root
    expect(mainInstance).toBeDefined()
  })

  it("should return dummy when keyExtractor is called", () => {
    jest.spyOn(instanceShallowed, "keyExtractor")
    const returnedId = instanceShallowed.keyExtractor({ id: "dummy" })
    expect(returnedId).toBe("dummy")
  })

  it("should call fetchMoreMovies and fetch more data action should be called", () => {
    jest.spyOn(instanceShallowed, "fetchMoreMovies")
    jest.spyOn(defaultProps.actions, "getMovieTickets")
    instanceShallowed.fetchMoreMovies()
    expect(instanceShallowed.fetchMoreMovies).toHaveBeenCalled()
    expect(defaultProps.actions.getMovieTickets).toHaveBeenCalled()
  })

  it("should call renderItem function and return a component", () => {
    jest.spyOn(instanceShallowed, "renderItem")
    const returnedComponent = instanceShallowed.renderItem({ item: "dummy-item" })
    expect(instanceShallowed.renderItem).toHaveBeenCalled()
    expect(returnedComponent).toBeDefined()
  })
})
