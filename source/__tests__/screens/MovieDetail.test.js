import React from "react"
import { Text } from "react-native"
import { shallow } from "enzyme"
import TestRenderer from "react-test-renderer"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

import { Button } from "../../atoms"
import MovieDetail from "../../screens/MovieDetail"
import withProviders from "../../containers/withProviders"
import movieListParsed from "../__mock__/movieListParsed"
import favouritesList from "../__mock__/favouritesList"
import * as actions from "../../redux/actions/favouriteListActions"

describe("MovieDetail Component", () => {
  let movieDetailComponent, movieDetailShallowed, mockedStore
  beforeEach(() => {
    const middleware = [thunk]
    const mockStore = configureMockStore(middleware)
    mockedStore = mockStore({
      movies: { movies: movieListParsed },
      favourites: { favourites: favouritesList },
    })
    movieDetailComponent = TestRenderer.create(
      withProviders(<MovieDetail movieId={movieListParsed[0].id} />),
    )
    movieDetailShallowed = shallow(
      <MovieDetail movieId={movieListParsed[0].id} store={mockedStore} />,
    )
  })
  it("should render MovieDetail component without movie id", () => {
    const movieDetailEmptyComponent = shallow(
      <MovieDetail.WrappedComponent movies={movieListParsed} favourites={favouritesList} />,
    )
    expect(movieDetailEmptyComponent).toBeDefined()
  })
  it("should render MovieDetail component", () => {
    expect(movieDetailComponent).toBeDefined()
  })

  it("should render the Prop Values", () => {
    expect(
      movieDetailShallowed
        .dive()
        .find(Text)
        .props().children,
    ).toBe(movieListParsed[0].title)
  })
  it("should invoke a function", () => {
    const addToFavourites = jest.spyOn(actions, "addToFavourites")
    movieDetailShallowed
      .dive()
      .find(Button)
      .props()
      .onPress()
    expect(addToFavourites).toBeCalled()
  })
})
