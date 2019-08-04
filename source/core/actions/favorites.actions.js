import { actionFactory } from "../factories/action.factory"

export const SET_FAVORITED_MOVIE = "SET_FAVORITED_MOVIE"
export const UNSET_FAVORITED_MOVIE = "UNSET_FAVORITED_MOVIE"

export default class FavoriteMoviesActions {
  static setFavoritedMovie(movieId) {
    return actionFactory(SET_FAVORITED_MOVIE, movieId)
  }

  static unsetFavoritedMovie(movieId) {
    return actionFactory(UNSET_FAVORITED_MOVIE, movieId)
  }
}
