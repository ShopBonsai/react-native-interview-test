import React from "react"
import { ListView } from "react-native"
import { shallow } from "enzyme"
import TestRenderer from "react-test-renderer"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

import MovieItem from "../../molecules/MovieItem"
import MovieList from "../../screens/MovieList"
import withProviders from "../../containers/withProviders"
import movieListParsed from "../__mock__/movieListParsed"
import favouritesList from "../__mock__/favouritesList"
import * as movieActions from "../../redux/actions/movieActions"

describe("MovieDetail Component", () => {
  let movieListComponent, movieListShallowed, mockedStore
  beforeEach(() => {
    const middleware = [thunk]
    const mockStore = configureMockStore(middleware)
    mockedStore = mockStore({
      movies: {
        movies: movieListParsed,
        skip: 0,
        limit: 10,
      },
      favourites: { favourites: favouritesList },
    })
    movieListComponent = TestRenderer.create(
      withProviders(<MovieList movieId={movieListParsed[0].id} />),
    )
    movieListShallowed = shallow(<MovieList store={mockedStore} />)
  })
  it("should render MovieDetail component without movies", () => {
    const movieListEmptyComponent = shallow(
      <MovieList.WrappedComponent movies={[]} fetchMovies={jest.fn} fetchFavourites={jest.fn} />,
    )
    expect(movieListEmptyComponent).toBeDefined()
  })
  it("should render MovieDetail component with movies", () => {
    const movieListEmptyComponent = shallow(
      <MovieList.WrappedComponent
        movies={movieListParsed}
        fetchMovies={jest.fn}
        fetchFavourites={jest.fn}
      />,
    )
    expect(movieListEmptyComponent).toBeDefined()
  })
  it("should render MovieDetail component", () => {
    expect(movieListComponent).toBeDefined()
  })

  it("should render the Prop Values", () => {
    expect(
      movieListShallowed
        .dive()
        .find(ListView)
        .props()
        .renderRow(movieListParsed[0]).type,
    ).toBe(MovieItem)
  })
  it("should invoke a function", () => {
    const fetchMovies = jest.spyOn(movieActions, "fetchMovies")
    movieListShallowed
      .dive()
      .find(ListView)
      .props()
      .onEndReached()
    expect(fetchMovies).toBeCalled()
  })
})
