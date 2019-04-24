// Actions
export const GET_DATA = "get_Data"

// Initial State
export const initialState = {
  data: [],
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payLoad }
    default:
      return state
  }
}

// Action Creators
export const updateData = data => {
  return {
    type: GET_DATA,
    payLoad: data,
  }
}
