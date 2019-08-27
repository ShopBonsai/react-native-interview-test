
import { 
  START_MOVIE_REQUEST, 
  SUCCESS_MOVIE_REQUEST,
  ERROR_MOVIE_REQUEST,
} from '../reduders/moviesReducer'

export function fetchMovies(skip=0,limit=10) {
  return async dispatch => {
    try {
      dispatch({ type: START_MOVIE_REQUEST })

    } catch (error) {
    }
  }
}
