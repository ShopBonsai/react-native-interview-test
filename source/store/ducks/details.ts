import { Reducer, Action, ActionCreator } from 'redux';

import createReducer from '../createReducer';
import Movie from '../../models/movie';

// Action Types
export const SELECT_MOVIE: string = 'details/SELECT_MOVIE';
export const CLEAR_SELECTION: string = 'details/CLEAR_SELECTION';

// State Type
export interface DetailsState {
  movie?: Movie;
}

// Initial State
export const initialState: DetailsState = {
  movie: undefined,
};

// Reducer
export const reducer: Reducer<DetailsState> = createReducer(initialState, {
  [SELECT_MOVIE]: (state, action) => ({
    ...state,
    movie: action.payload,
  }),
  [CLEAR_SELECTION]: state => ({
    ...state,
    movie: initialState.movie,
  }),
});

// Action Creator Types
export interface SelectMovieAction extends Action {
  type: typeof SELECT_MOVIE;
  payload: Movie;
}

export interface ClearSelectionAction extends Action {
  type: typeof CLEAR_SELECTION;
}

// Action Creators
export const selectMovie: ActionCreator<SelectMovieAction> = movie => ({
  type: SELECT_MOVIE,
  payload: movie,
});

export const clearSelection: ActionCreator<ClearSelectionAction> = () => ({
  type: CLEAR_SELECTION,
});
