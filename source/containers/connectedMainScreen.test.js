import React from "react"
import TestRenderer from "react-test-renderer"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

import ConnectedMainScreen from "./connectedMainScreen"

let mockedStore

describe("connectedMainScreen", () => {
  beforeEach(() => {
    const middleware = [thunk]
    const mockStore = configureMockStore(middleware)
    mockedStore = mockStore({})
  })

  it("should render without any problem", () => {
    const connectedMainScreen = TestRenderer.create(<ConnectedMainScreen store={mockedStore} />)
    const connectedMainScreenIn = connectedMainScreen.root
    expect(connectedMainScreenIn).toBeDefined()
  })
})
