import services from "../services"
import * as actionTypes from "../actionTypes"

import moviesNormalizer from "../../normalizers/movieNormalizer"

export const fetchMoviesInprogress = () => ({
  type: actionTypes.FETCH_MOVIE_INPROGRESS,
})
export const fetchMoviesFailed = err => ({
  type: actionTypes.FETCH_MOVIE_FAILED,
  error: err,
})
export const fetchMoviesSuccess = data => ({
  type: actionTypes.FETCH_MOVIE_SUCCESS,
  data,
})

export function fetchMovies(skip, limit) {
  return dispatch => {
    dispatch(fetchMoviesInprogress())
    services
      .fetchMovies(skip, limit)
      .then(resp => {
        dispatch(fetchMoviesSuccess(moviesNormalizer(resp.data)))
      })
      .catch(err => dispatch(fetchMoviesFailed(err)))
  }
}
