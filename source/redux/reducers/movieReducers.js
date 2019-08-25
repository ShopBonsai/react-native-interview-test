import * as actionTypes from "../actionTypes"

// Initial State
export const initialState = {
  movies: [],
  limit: 10,
  skip: 0,
  isLoading: false,
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE_INPROGRESS:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_MOVIE_FAILED:
      return {
        ...state,
        isLoading: false,
      }
    case actionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, ...action.data],
        isLoading: false,
      }
    default:
      return state
  }
}
