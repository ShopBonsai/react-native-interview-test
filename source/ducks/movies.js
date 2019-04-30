import { movieService } from "../services";

// * Action Types
export const SET_MOVIE_LIST = "movies/SET_MOVIE_LIST";
export const SET_MOVIE_PAGINATION = "movies/SET_MOVIE_PAGINATION";

// * Initial State
export const initialState = {
  list: [],
  pagination: {
    skip: 0,
    limit: 10,
  },
};

// * Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MOVIE_LIST:
      return { ...state, list: action.data };

    case SET_MOVIE_PAGINATION:
      return { ...state, pagination: { ...state.pagination, skip: action.data } };

    default:
      return state;
  }
};

// * Action Creators
class ActionCreators {
  // * Redux-Thunk Actions
  /**
   * Fetches a list of movies and adds it to the Redux state
   * @param {boolean} initialize - Determines if the list of movies should be added to or replace the current list of movies
   */
  getMovieList = (initialize = false) => {
    return (dispatch, getState) => {
      const currentPagination = getState().movies.pagination;
      const skip = currentPagination.skip;
      const limit = currentPagination.limit;

      movieService
        .getMovieList(skip, limit)
        .then((movies) => {
          const parsedMovies = movieService.parseMovieList(movies);

          if (initialize) {
            dispatch(this._setMovieList(parsedMovies));
          } else {
            const currentList = getState().movies.list;

            dispatch(this._setMovieList([...currentList, ...parsedMovies]));
          }
        })
        .catch((error) => {
          console.error("An error was encountered fetching: " + error.message);
          throw error;
        });
    };
  };

  /**
   * Initializes the pagination and fetches movies
   */
  getInitialPage = () => {
    return (dispatch) => {
      dispatch(this._setPagination(0));
      dispatch(this.getMovieList(true));
    };
  };

  /**
   * Increments the pagination, retrieves the next set of movies and updates the Redux store with it
   */
  getNextPage = () => {
    return (dispatch, getState) => {
      const currentPagination = getState().movies.pagination;
      const skip = currentPagination.skip + 10;

      dispatch(this._setPagination(skip));
      dispatch(this.getMovieList(false));
    };
  };

  // * Redux Actions
  _setMovieList = (data) => ({ type: SET_MOVIE_LIST, data });
  _setPagination = (data) => ({ type: SET_MOVIE_PAGINATION, data });
}

export const actionCreators = new ActionCreators();
