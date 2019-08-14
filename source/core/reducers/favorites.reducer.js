import {
  SET_FAVORITED_MOVIE,
  UNSET_FAVORITED_MOVIE,
  SAVE_FAV_MOVIES_ERROR,
  SAVE_FAV_MOVIES_START,
  SAVE_FAV_MOVIES_SUCCESS,
} from "../actions/favorites.actions"

export const initialState = {
  favoritedMovies: [],
  isSaving: false,
  errorSaving: null,
}

// eslint-disable-next-line complexity
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

    case SAVE_FAV_MOVIES_START: {
      return {
        ...state,
        isSaving: true,
      }
    }

    case SAVE_FAV_MOVIES_SUCCESS: {
      return {
        ...state,
        isSaving: false,
      }
    }

    case SAVE_FAV_MOVIES_ERROR: {
      return {
        ...state,
        isSaving: false,
        errorSaving: action.payload,
      }
    }

    default:
      return state
  }
}

export default favoritedMoviesReducer
