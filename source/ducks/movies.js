import { movieService } from "../services";

// * Action Types
export const SET_MOVIE_LIST = "movies/SET_MOVIE_LIST";
export const SET_MOVIE_PAGINATION = "movies/SET_MOVIE_PAGINATION";
export const SET_MOVIE_DETAILS = "movies/SET_MOVIE_DETAILS";
export const REMOVE_MOVIE_FROM_CART = "movies/REMOVE_MOVIE_FROM_CART";
export const SET_CART = "movies/SET_CART";

// * Initial State
export const initialState = {
  list: [],
  pagination: {
    skip: 0,
    limit: 10,
  },
  details: {},
  cart: [],
};

// * Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MOVIE_LIST:
      return { ...state, list: action.data };

    case SET_MOVIE_PAGINATION:
      return { ...state, pagination: { ...state.pagination, skip: action.data } };

    case SET_MOVIE_DETAILS:
      return {
        ...state,
        details: action.data,
      };

    case SET_CART:
      return {
        ...state,
        cart: action.data,
      };

    default:
      return state;
  }
};

// * Action Creators
class ActionCreators {
  // * Redux-Thunk Actions
  /**
   * Fetches a list of movies and adds it to the Redux state
   * @param {boolean} [initialize = false] - Determines if the list of movies should be added to or replace the current list of movies
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

  /**
   * Stores the selected movie's details in Redux store
   * @param {object} movie - Contains movie details
   */
  setMovieDetails = (movie) => {
    return (dispatch) => {
      dispatch(this._setMovieDetails(movie));
    };
  };

  /**
   * Adds movie to cart and stores in Redux store
   * @param {object} movie - Contains movie details
   */
  addToCart = (movie) => {
    return (dispatch, getState) => {
      const currentState = getState().movies;
      const currentCart = currentState.cart;
      const newCart = [...currentCart, movie];

      dispatch(this._setCart(newCart));
    };
  };

  /**
   * Removes movie from the cart that has a matching ID
   * @param {string} movieId - ID belonging to the movie which needs to be removed
   */
  removeFromCart = (movieId) => {
    return (dispatch, getState) => {
      const currentState = getState().movies;
      const currentCart = currentState.cart;
      const foundMovieIndex = currentCart.findIndex((movieInCart) => movieInCart.id === movieId);

      if (foundMovieIndex !== -1) {
        const newCart = [...currentCart];

        newCart.splice(foundMovieIndex, 1);
        dispatch(this._setCart(newCart));
      }
    };
  };

  // * Redux Actions
  _setMovieList = (data) => ({ type: SET_MOVIE_LIST, data });
  _setPagination = (data) => ({ type: SET_MOVIE_PAGINATION, data });
  _setMovieDetails = (data) => ({ type: SET_MOVIE_DETAILS, data });
  _setCart = (data) => ({ type: SET_CART, data });
}

export const actionCreators = new ActionCreators();
