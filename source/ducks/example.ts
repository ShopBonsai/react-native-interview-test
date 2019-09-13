import { Reducer, Action, ActionCreator } from "redux"

// Action Types
export const ADD: string = "example/ADD"
export const SUBTRACT: string = "example/SUBTRACT"
export const RESET: string = "example/RESET"

// State Type
export interface ExampleState {
  value: number;
}

// Initial State
export const initialState: ExampleState = {
  value: 0,
}

// Reducer
const reducer: Reducer<ExampleState> = (state = initialState, action) => {
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

// Action Creator Types
export interface AddExampleAction extends Action {
  type: typeof ADD;
}

export interface SubtractExampleAction extends Action {
  type: typeof SUBTRACT;
}

export interface ResetExampleAction extends Action {
  type: typeof RESET;
}

// Action Creators
export const addExample: ActionCreator<AddExampleAction> = () => ({ type: ADD })
export const subtractExample: ActionCreator<SubtractExampleAction> = () => ({ type: SUBTRACT })
export const resetExample: ActionCreator<ResetExampleAction> = () => ({ type: RESET })

export default reducer;