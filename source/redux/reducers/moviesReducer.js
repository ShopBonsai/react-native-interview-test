export const START_MOVIE_REQUEST = 'START_MOVIE_REQUEST'
export const SUCCESS_MOVIE_REQUEST = 'SUCCESS_MOVIE_REQUEST'
export const ERROR_MOVIE_REQUEST = 'ERROR_MOVIE_REQUEST'

export const initialState = {
  data: [],
  error: null
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case START_MOVIE_REQUEST:
      return state
    case SUCCESS_MOVIE_REQUEST:
      return { ...state, data: action.data }
    case ERROR_MOVIE_REQUEST:
      return { ...state, error: action.error }
    default:
      return state
  }
}
