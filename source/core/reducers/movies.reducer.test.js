import {
  GET_MORE_MOVIES_START,
  GET_MORE_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
} from "../actions/movies.actions"

import moviesReducer, { initialState } from "./movies.reducer"

const dataItem = {
  _id: {
    $oid: "dummy",
  },
  genre: null,
  image: "http://dummy.com",
  title: "dummy-title",
  dummy: "dummyprop",
}

const dataItemMapped = {
  id: "dummy",
  genres: [],
  image: "https://dummy.com",
  title: "dummy-title",
  dummy: "dummyprop",
}

describe("Movies reducer", () => {
  it("returns the inital state", () => {
    const returnedState = moviesReducer(undefined, { type: "dummy" })
    expect(returnedState).toEqual(initialState)
  })

  it(`should return and reduced action with ${GET_MOVIES_START}`, () => {
    const returnedState = moviesReducer(initialState, { type: GET_MOVIES_START })
    expect(returnedState).toEqual(initialState)
  })

  it(`should return and reduced action with ${GET_MORE_MOVIES_START}`, () => {
    const returnedState = moviesReducer(initialState, { type: GET_MORE_MOVIES_START })
    expect(returnedState).toEqual(initialState)
  })

  it(`should return and reduced action with ${GET_MOVIES_SUCCESS}`, () => {
    const returnedState = moviesReducer(initialState, {
      type: GET_MOVIES_SUCCESS,
      payload: [dataItem],
    })
    expect(returnedState).toEqual({
      ...initialState,
      fetching: false,
      currentSkip: 20,
      data: [dataItemMapped],
    })
  })

  it(`should return and reduced action with ${GET_MOVIES_ERROR}`, () => {
    const returnedState = moviesReducer(initialState, {
      type: GET_MOVIES_ERROR,
      payload: "dummy-error",
    })
    expect(returnedState).toEqual({
      ...initialState,
      fetching: false,
      error: "dummy-error",
    })
  })

  it(`should return and reduced action with ${GET_MORE_MOVIES_SUCCESS}`, () => {
    const returnedState = moviesReducer(initialState, {
      type: GET_MORE_MOVIES_SUCCESS,
      payload: [dataItem],
    })
    expect(returnedState).toEqual({
      ...initialState,
      fetching: false,
      currentSkip: 20,
      data: [dataItemMapped],
    })
  })
})
