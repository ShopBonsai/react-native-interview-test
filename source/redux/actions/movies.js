import * as env from '../../env'

import {
  START_MOVIE_REQUEST,
  SUCCESS_MOVIE_REQUEST,
  ERROR_MOVIE_REQUEST
} from '../reducers/moviesReducer'

import fetcher from '../../utils/fetcher'

/**
 * The mapMovies it's responsible by to map/ organize
 * the movies by a specific key
 *
 * @export {function}
 * @param {array} data
 * @param {string} [key='genre']
 * @returns {Array}
 */
export function mapMovies(data, key = 'genre') {
  const obj = data.reduce((acumaled, currentValue) => {
    if (acumaled && acumaled[currentValue[key]]) {
      acumaled[currentValue[key]] = [...acumaled[currentValue[key]], currentValue]
    } else if (currentValue[key] !== null && currentValue[key]) {
      acumaled[currentValue[key]] = [currentValue]
      return acumaled
    }
    return acumaled
  }, {})
  return Object.keys(obj).map(el => ({ [key]: el, items: obj[el] }))
}

/**
 * The fetchMovies it's responsible by to fetch the
 * movies by skip and limit as queryString params
 *
 * @param {number} [skip=0]
 * @param {number} [limit=10]
 * @returns {Promise}
 */
export function fetchMovies(skip = 0, limit = 10) {
  return async dispatch => {
    try {
      dispatch({ type: START_MOVIE_REQUEST })

      const { API_BASE } = env
      const endPoint = `${API_BASE}/movieTickets?skip=${skip}&limit=${limit}`

      const request = await fetcher.post(endPoint)
      if (Array.isArray(request) && request.length > 0) {
        dispatch({ type: SUCCESS_MOVIE_REQUEST, data: mapMovies(request) })
      } else {
        dispatch({ type: ERROR_MOVIE_REQUEST, error: 'Empty fetch' })
      }
    } catch (error) {
      dispatch({ type: ERROR_MOVIE_REQUEST, error: error.message })
    }
  }
}

export default {
  fetchMovies,
  mapMovies
}
