import FavoriteMoviesActions from "./favorites.actions"

describe("FavoriteActions class", () => {
  it("should create an instance without problems", () => {
    const favoritesActions = new FavoriteMoviesActions()
    expect(favoritesActions).toBeInstanceOf(FavoriteMoviesActions)
  })
})
