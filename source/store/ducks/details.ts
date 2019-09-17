import { Reducer, Action, ActionCreator } from 'redux';

import createReducer from '../createReducer';
import Movie from '../../models/movie';
import Ticket from '../../models/ticket';

// Action Types
export const SELECT_MOVIE: string = 'details/SELECT_MOVIE';
export const SELECT_TICKET: string = 'details/SELECT_TICKET';
export const CLEAR_SELECTION: string = 'details/CLEAR_SELECTION';

// State Type
export interface DetailsState {
  movie?: Movie;
  ticket?: Ticket;
}

// Initial State
export const initialState: DetailsState = {
  movie: undefined,
  ticket: undefined,
};

// Reducer
export const reducer: Reducer<DetailsState> = createReducer(initialState, {
  [SELECT_MOVIE]: (state, action) => ({
    ...state,
    movie: action.payload,
  }),
  [SELECT_TICKET]: (state, action) => ({
    ...state,
    ticket: action.payload,
  }),
  [CLEAR_SELECTION]: state => ({
    ...state,
    movie: initialState.movie,
    ticket: initialState.ticket,
  }),
});

// Action Creator Types
export interface SelectMovieAction extends Action {
  type: typeof SELECT_MOVIE;
  payload: Movie;
}

export interface SelectTicketAction extends Action {
  type: typeof SELECT_TICKET;
  payload: Ticket;
}

export interface ClearSelectionAction extends Action {
  type: typeof CLEAR_SELECTION;
}

// Action Creators
export const selectMovie: ActionCreator<SelectMovieAction> = movie => ({
  type: SELECT_MOVIE,
  payload: movie,
});

export const selectTicket: ActionCreator<SelectTicketAction> = ticket => ({
  type: SELECT_TICKET,
  payload: ticket,
});

export const clearSelection: ActionCreator<ClearSelectionAction> = () => ({
  type: CLEAR_SELECTION,
});
