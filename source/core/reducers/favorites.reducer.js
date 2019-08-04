import { SET_FAVORITED_MOVIE, UNSET_FAVORITED_MOVIE } from "../actions/favorites.actions"

export const initialState = {
  favoritedMovies: [],
}

const favoritedMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITED_MOVIE: {
      return {
        ...state,
        favoritedMovies: [...state.favoritedMovies, action.payload],
      }
    }

    case UNSET_FAVORITED_MOVIE: {
      return {
        ...state,
        favoritedMovies: state.favoritedMovies.filter((item) => item !== action.payload),
      }
    }

    default:
      return state
  }
}

export default favoritedMoviesReducer
