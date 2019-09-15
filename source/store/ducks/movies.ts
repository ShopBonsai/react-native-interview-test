import { Reducer, Action, ActionCreator } from 'redux';

import createReducer from '../createReducer';
import Movie from '../../models/movie';

// Action Types
export const Types: Record<string, string> = {
  FETCH_MOVIES_REQUEST: 'movies/FETCH_MOVIES_REQUEST',
  FETCH_MOVIES_SUCCESS: 'movies/FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILURE: 'movies/FETCH_MOVIES_FAILURE',
};

// State Type
export interface MoviesState {
  movies: Movie[];
  movie: Partial<Movie>;
  loading: boolean;
  errorMessage: string;
}

// Initial State
export const initialState: MoviesState = {
  movies: [],
  movie: {},
  loading: false,
  errorMessage: '',
};

// Reducer
export const reducer: Reducer<MoviesState> = createReducer(initialState, {
  [Types.FETCH_MOVIES_REQUEST]: state => ({
    ...state,
    loading: true,
  }),
  [Types.FETCH_MOVIES_SUCCESS]: (state, action) => ({
    ...state,
    movies: action.payload,
    loading: false,
  }),
  [Types.FETCH_MOVIES_FAILURE]: (state, action) => ({
    ...state,
    errorMessage: action.payload,
    loading: false,
  }),
});

// Action Creator Types
export interface FetchMoviesRequestAction extends Action {
  type: typeof Types.FETCH_MOVIES_REQUEST;
}

export interface FetchMoviesSuccessAction extends Action {
  type: typeof Types.FETCH_MOVIES_SUCCESS;
}

export interface FetchMoviesFailureAction extends Action {
  type: typeof Types.FETCH_MOVIES_FAILURE;
}

// Action Creators
export const fetchMoviesRequest: ActionCreator<
  FetchMoviesRequestAction
> = () => ({
  type: Types.FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess: ActionCreator<
  FetchMoviesSuccessAction
> = () => ({
  type: Types.FETCH_MOVIES_SUCCESS,
});

export const fetchMoviesFailure: ActionCreator<
  FetchMoviesFailureAction
> = () => ({
  type: Types.FETCH_MOVIES_FAILURE,
});

export default reducer;
