import { setFavoritedMovies } from "../../../redux/services/favouriteMoviesService"
import movieListParsed from "../../__mock__/movieListParsed"

describe("Card Component", () => {
  it("should set like unlike movie", async () => {
    expect(Object.keys(await setFavoritedMovies(movieListParsed[0].id))[0]).toEqual(
      movieListParsed[0].id,
    )
    expect(await setFavoritedMovies(movieListParsed[0].id)).toEqual({})
  })
})
