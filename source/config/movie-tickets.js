// Actions
export const FETCH_MOVIE_TICKETS = "movie-tickets/FETCH_MOVIE_TICKETS"
export const SET_MOVIE_TICKETS = "movie-tickets/SET_MOVIE_TICKETS"

// Initial State
export const initialState = {
  tickets: [],
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MOVIE_TICKETS:
      return {
        ...state,
        tickets: action.result,
      }
    default:
      return state
  }
}

// Action Creators
export const fetchMovieTickets = (successCallback, errorCallback) => ({
  type: FETCH_MOVIE_TICKETS,
  onSuccess: successCallback,
  onError: errorCallback,
})
