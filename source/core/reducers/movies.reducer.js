import {
  GET_MOVIES_START,
  GET_MOVIES_ERROR,
  GET_MOVIES_SUCCESS,
  GET_MORE_MOVIES_START,
  GET_MORE_MOVIES_SUCCESS,
} from "../actions/movies.actions"
import moviesFactory from "../factories/movies.factory"

export const initialState = {
  data: [],
  currentSkip: 0,
  currentLimit: 20,
  fetching: true,
  error: null,
  fetchingMoreMovies: true,
}

// eslint-disable-next-line complexity
const movieTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_START:
      return { ...state, fetching: true }

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: moviesFactory(action.payload),
        currentSkip: state.currentSkip + state.currentLimit,
      }

    case GET_MOVIES_ERROR: {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    }

    case GET_MORE_MOVIES_START:
      return { ...state, fetchingMoreMovies: true }

    case GET_MORE_MOVIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: [...state.data, ...moviesFactory(action.payload)],
        currentSkip: state.currentSkip + state.currentLimit,
      }

    default:
      return state
  }
}

export default movieTicketsReducer
