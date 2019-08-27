const START_MOVIE_REQUEST = 'START_MOVIE_REQUEST'
const SUCCESS_MOVIE_REQUEST = 'SUCCESS_MOVIE_REQUEST'
const ERROR_MOVIE_REQUEST = 'SUCCESS_MOVIE_REQUEST'

export function fetch(skip=0,limit=10) {
  return async dispatch => {
    try {
    } catch (error) {
    }
  }
}

const initialState = {}
export default function movieReducer(state = initialState, action) {
  switch(action.type){
    case START_MOVIE_REQUEST:
      return state
    case SUCCESS_MOVIE_REQUEST:
      return state
    case ERROR_MOVIE_REQUEST:
      return state
    default:
      return state
  }
}