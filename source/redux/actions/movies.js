import API_BASE from '../../env'

import {
  START_MOVIE_REQUEST,
  SUCCESS_MOVIE_REQUEST,
  ERROR_MOVIE_REQUEST
} from '../reducers/moviesReducer'

import fetcher from '../../utils/fetcher'

/**
 * The fetchMovies it's responsible by to fetch the
 * movies by skip and limit as queryString params
 *
 * @param {number} [skip=0]
 * @param {number} [limit=10]
 * @returns {Promise}
 */
function fetchMovies(skip = 0, limit = 10) {
  return async dispatch => {
    try {
      const endPoint = `${API_BASE}/movieTickets?skip=${skip}&limit=${limit}`
      dispatch({ type: START_MOVIE_REQUEST })
      const request = await fetcher.post(endPoint)

      if (Array.isArray(request)) {
        dispatch({ type: SUCCESS_MOVIE_REQUEST, data: request })
      } else {
        dispatch({ type: ERROR_MOVIE_REQUEST, error: 'Empty fetch' })
      }
    } catch (error) {
      dispatch({ type: ERROR_MOVIE_REQUEST, error: error.message })
    }
  }
}

function mapMovieToGenre(data) {
  return data
}

export default {
  fetchMovies,
  mapMovieToGenre
}
