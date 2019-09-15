import { Saga } from 'redux-saga';

import {
  reducer as moviesReducer,
  saga as moviesSaga,
  MoviesState,
} from './movies';

// Application State Type
export interface ApplicationState {
  movies: MoviesState;
}

// Application Reducers
export const reducers = {
  movies: moviesReducer,
};

// Application Sagas
export const sagas: Saga[] = [moviesSaga];
