import { Reducer, Action as ReduxAction } from 'redux';

// Extends Action type from Redux to add payload property
interface Action extends ReduxAction {
  payload?: any;
}

// Those will update our state. Similar to "case ACTION_TYPE: (...)"
type ActionHandler<State> = (state: State, action: Action) => State;

type CreateReducer = <State>(
  initialState: State,
  actionHandlers: Record<string, ActionHandler<State>>,
) => Reducer<State>;

// Returns a reducer givan an initial state and key/value actionHandlers pairs
// where the key is the action type and the actionHandler is a function that
// recieves the state, the action and returns a new state
const createReducer: CreateReducer = (initialState, actionHandlers) => {
  return (state = initialState, action) =>
    Object.prototype.hasOwnProperty.call(actionHandlers, action.type)
      ? actionHandlers[action.type](state, action)
      : state;
};

export default createReducer;
