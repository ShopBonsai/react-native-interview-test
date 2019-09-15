import { Reducer, Action as ReduxAction } from 'redux';

interface Action extends ReduxAction {
  payload?: any;
}

type ActionHandler<State> = (state: State, action: Action) => State;

type CreateReducer = <State>(
  initialState: State,
  actionHandlers: Record<string, ActionHandler<State>>,
) => Reducer<State>;

const createReducer: CreateReducer = (initialState, actionHandlers) => {
  return (state = initialState, action) =>
    Object.prototype.hasOwnProperty.call(actionHandlers, action.type)
      ? actionHandlers[action.type](state, action)
      : state;
};

export default createReducer;
