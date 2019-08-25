import services from "../services/movieService"
import * as actionTypes from "../actionTypes"

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

export function movieTickets(skip, limit) {
  return dispatch => {
    dispatch(fetchMoviesInprogress())
    services
      .fetchMovies(skip, limit)
      .then(resp => {
        dispatch(fetchMoviesSuccess(resp))
      })
      .catch(err => dispatch(fetchMoviesFailed(err)))
  }
}
