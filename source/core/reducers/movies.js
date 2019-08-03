import { GET_MOVIES_START, GET_MOVIES_ERROR, GET_MOVIES_SUCCESS } from "../actions/movies.actions"

export const initialState = {
  data: [],
  currentSkip: 0,
  currentLimit: 20,
  fetching: true,
  error: null,
}

const movieTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_START:
      return { ...state, fetching: true }

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload,
        currentSkip: state.currentSkip + state.currentLimit,
      }

    case GET_MOVIES_ERROR: {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    }

    default:
      return state
  }
}

export default movieTicketsReducer
