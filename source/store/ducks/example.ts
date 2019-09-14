import { Reducer, Action, ActionCreator } from 'redux';

// Action Types
export const Types: Record<string, string> = {
  ADD: 'example/ADD',
  SUBTRACT: 'example/SUBTRACT',
  RESET: 'example/RESET',
};

// State Type
export interface ExampleState {
  value: number;
}

// Initial State
export const initialState: ExampleState = {
  value: 0,
};

// Reducer
export const reducer: Reducer<ExampleState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        value: state.value + 1,
      };
    case Types.SUBTRACT:
      return {
        ...state,
        value: state.value - 1,
      };
    case Types.RESET:
      return {
        ...state,
        value: initialState.value,
      };
    default:
      return state;
  }
};

// Action Creator Types
export interface AddExampleAction extends Action {
  type: typeof Types.ADD;
}

export interface SubtractExampleAction extends Action {
  type: typeof Types.SUBTRACT;
}

export interface ResetExampleAction extends Action {
  type: typeof Types.RESET;
}

// Action Creators
export const addExample: ActionCreator<AddExampleAction> = () => ({
  type: Types.ADD,
});
export const subtractExample: ActionCreator<SubtractExampleAction> = () => ({
  type: Types.SUBTRACT,
});
export const resetExample: ActionCreator<ResetExampleAction> = () => ({
  type: Types.RESET,
});

export default reducer;
