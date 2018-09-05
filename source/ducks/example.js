// Actions
export const ADD = "example/ADD"
export const SUBTRACT = "example/SUBTRACT"
export const RESET = "example/RESET"

// Initial State
export const initialState = {
  value: 0,
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        value: state.value + 1,
      }
    case SUBTRACT:
      return {
        ...state,
        value: state.value - 1,
      }
    case RESET:
      return {
        ...state,
        value: initialState.value,
      }
    default:
      return state
  }
}

// Action Creators
export const addExample = () => ({ type: ADD })
export const subtractExample = () => ({ type: SUBTRACT })
export const resetExample = () => ({ type: RESET })
