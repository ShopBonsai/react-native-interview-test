import { ADD, SUBTRACT, RESET } from "../actions/example"

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

// Are you wondering where did I move the action creators?
// They are on its folder under core/actions
