import { SET_FAVORITED_MOVIE, UNSET_FAVORITED_MOVIE } from "../actions/favorites.actions"

import favoritesReducer, { initialState } from "./favorites.reducer"

describe("Favorites reducer", () => {
  it("should return the initial state if not action", () => {
    const returnedState = favoritesReducer(undefined, "dummy-action")
    expect(returnedState).toEqual(initialState)
  })

  it(`should reduce with ${SET_FAVORITED_MOVIE}`, () => {
    const returnedState = favoritesReducer(undefined, { type: SET_FAVORITED_MOVIE, payload: "id" })
    expect(returnedState).toEqual({ favoritedMovies: ["id"] })
  })

  it(`should reduce with ${UNSET_FAVORITED_MOVIE}`, () => {
    const returnedState = favoritesReducer(
      { favoritedMovies: ["id"] },
      { type: UNSET_FAVORITED_MOVIE, payload: "id" },
    )
    expect(returnedState).toEqual({ favoritedMovies: [] })
  })
})
