import { initialState as moviesInitialState } from "../core/reducers/movies.reducer"
import { initialState as favoriteInitialState } from "../core/reducers/favorites.reducer"
import FavoriteMoviesService from "../core/services/FavoriteMovies.service"
import env from "../env"

async function initialStore() {
  return {
    movieTicketsStore: moviesInitialState,
    favoritedMoviesStore: {
      ...favoriteInitialState,
      favoritedMovies: await FavoriteMoviesService.getFavoritedMovies(env.LOCAL_MOVIES_KEY),
    },
  }
}

export default initialStore
