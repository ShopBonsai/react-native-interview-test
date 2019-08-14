import { actionFactory } from "../factories/action.factory"
import FavoriteMoviesService from "../services/FavoriteMovies.service"

export const SET_FAVORITED_MOVIE = "SET_FAVORITED_MOVIE"
export const UNSET_FAVORITED_MOVIE = "UNSET_FAVORITED_MOVIE"
export const SAVE_FAV_MOVIES_START = "SAVE_FAVORITED_MOVIES"
export const SAVE_FAV_MOVIES_SUCCESS = "SAVE_FAVORITED_MOVIES_SUCCESS"
export const SAVE_FAV_MOVIES_ERROR = "SAVE_FAVORITED_MOVIES_ERROR"

export default class FavoriteMoviesActions {
  static setFavoritedMovie(movieId) {
    return (dispatch) => {
      dispatch(actionFactory(SET_FAVORITED_MOVIE, movieId))
      dispatch(this.saveFavoritedMovies())
    }
  }

  static unsetFavoritedMovie(movieId) {
    return (dispatch) => {
      dispatch(actionFactory(UNSET_FAVORITED_MOVIE, movieId))
      dispatch(this.saveFavoritedMovies())
    }
  }

  static saveFavoritedMovies() {
    return (dispatch, getState) => {
      dispatch(actionFactory(SAVE_FAV_MOVIES_START))
      const state = getState()
      const favoriteMovies = state.favoritedMoviesStore.favoritedMovies
      FavoriteMoviesService.setFavoritedMovies(favoriteMovies)
        .then(() => {
          dispatch(actionFactory(SAVE_FAV_MOVIES_SUCCESS))
        })
        .catch((error) => {
          dispatch(actionFactory(SAVE_FAV_MOVIES_ERROR, error))
        })
    }
  }
}
