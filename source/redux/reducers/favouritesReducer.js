import * as actionTypes from "../actionTypes"

// Initial State
export const initialState = {
  favourites: {},
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVROURITES_INPROGRESS:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.ADD_TO_FAVROURITES_SUCCESS:
      return {
        ...state,
        favourites: action.data,
        isLoading: false,
      }
    case actionTypes.FETCH_FAVROURITES_INPROGRESS:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_FAVROURITES_SUCCESS:
      return {
        ...state,
        favourites: action.data,
        isLoading: false,
      }
    default:
      return state
  }
}
