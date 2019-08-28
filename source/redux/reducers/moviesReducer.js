export const START_MOVIE_REQUEST = 'START_MOVIE_REQUEST'
export const SUCCESS_MOVIE_REQUEST = 'SUCCESS_MOVIE_REQUEST'
export const ERROR_MOVIE_REQUEST = 'ERROR_MOVIE_REQUEST'

export const CLEAR_LIST = 'CLEAR_LIST'

export const initialState = {
  data: [],
  error: null,
  isLoading: true,
  noMoreItems: false,
  skip: 0
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case START_MOVIE_REQUEST:
      return { ...state, isLoading: true }
    case SUCCESS_MOVIE_REQUEST:
      return {
        ...state,
        data: [...state.data, ...action.data],
        noMoreItems: action.noMoreItems,
        isLoading: false
      }
    case ERROR_MOVIE_REQUEST:
      return { ...state, error: action.error, isLoading: false }
    case CLEAR_LIST:
      return initialState
    default:
      return state
  }
}
