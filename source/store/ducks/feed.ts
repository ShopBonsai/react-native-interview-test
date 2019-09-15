import { Reducer, Action, ActionCreator } from 'redux';
import { Saga } from 'redux-saga';
import { put, takeLatest, all } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';

import createReducer from '../createReducer';
import Movie from '../../models/movie';
import http from '../../utils/http';

// Action Types
export const FETCH_MOVIES_REQUEST: string = 'movies/FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS: string = 'movies/FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE: string = 'movies/FETCH_MOVIES_FAILURE';

// State Type
export interface FeedState {
  movies: Movie[];
  movie: Partial<Movie>;
  page: number;
  pageSize: number;
  loading: boolean;
  errorMessage: string;
}

// Initial State
export const initialState: FeedState = {
  movies: [],
  movie: {},
  page: 1,
  pageSize: 3,
  loading: false,
  errorMessage: '',
};

// Reducer
export const reducer: Reducer<FeedState> = createReducer(initialState, {
  [FETCH_MOVIES_REQUEST]: state => ({
    ...state,
    loading: true,
    errorMessage: initialState.errorMessage,
  }),
  [FETCH_MOVIES_SUCCESS]: (state, action) => ({
    ...state,
    ...action.payload,
    loading: false,
  }),
  [FETCH_MOVIES_FAILURE]: (state, action) => ({
    ...state,
    errorMessage: action.payload,
    loading: false,
  }),
});

// Action Creator Types
export interface FetchMoviesRequestAction extends Action {
  type: typeof FETCH_MOVIES_REQUEST;
  payload: {
    movies: Movie[];
    page: number;
    pageSize: number;
  };
}

export interface FetchMoviesSuccessAction extends Action {
  type: typeof FETCH_MOVIES_SUCCESS;
  payload: {
    movies: Movie[];
    page: number;
    pageSize: number;
  };
}

export interface FetchMoviesFailureAction extends Action {
  type: typeof FETCH_MOVIES_FAILURE;
  payload: string;
}

// Action Creators
export const fetchMoviesRequest: ActionCreator<FetchMoviesRequestAction> = ({
  movies = [],
  page,
  pageSize,
}) => ({
  type: FETCH_MOVIES_REQUEST,
  payload: {
    movies,
    page,
    pageSize,
  },
});

export const fetchMoviesSuccess: ActionCreator<FetchMoviesSuccessAction> = ({
  movies,
  page,
  pageSize,
}) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: {
    movies,
    page,
    pageSize,
  },
});

export const fetchMoviesFailure: ActionCreator<FetchMoviesFailureAction> = (
  errorMessage: string,
) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: errorMessage,
});

// Saga Workers
export function* handleFetchMoviesRequest(action: FetchMoviesRequestAction) {
  try {
    // Pagination
    const { movies, page, pageSize } = action.payload;

    // Setup request params
    const params = {
      skip: (page - 1) * pageSize,
      limit: pageSize,
    };

    // Request movies from API
    const { data } = yield http.get('/movieTickets', { params });

    // Dispatch success action
    yield put(
      fetchMoviesSuccess({
        movies: [...movies, ...data],
        page,
        pageSize,
      }),
    );
  } catch (error) {
    // Dispatch failure action
    const errorMessage: string = 'Oops! Failed to fetch movies.';
    showMessage({ message: error.message, type: 'danger' });
    yield put(fetchMoviesFailure(errorMessage));
  }
}

// Saga Watchers
export function* watchFetchMoviesRequest() {
  yield takeLatest<FetchMoviesRequestAction>(
    FETCH_MOVIES_REQUEST,
    handleFetchMoviesRequest,
  );
}

// Saga
export const saga: Saga = function* saga() {
  yield all([watchFetchMoviesRequest()]);
};
