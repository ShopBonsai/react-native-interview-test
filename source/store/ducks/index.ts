import movies, { MoviesState } from './movies';

// Application State Type
export interface ApplicationState {
  movies: MoviesState;
}

export default {
  movies,
};
