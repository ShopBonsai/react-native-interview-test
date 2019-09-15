import { Reducer, Action, ActionCreator } from 'redux';
import { Saga } from 'redux-saga';
import { put, takeLatest, all, select } from 'redux-saga/effects';

import createReducer from '../createReducer';
import Movie from '../../models/movie';

// Action Types
export const ADD_FAVORITE: string = 'favorites/ADD_FAVORITE';
export const REMOVE_FAVORITE: string = 'favorites/REMOVE_FAVORITE';
export const SET_FAVORITES: string = 'favorites/SET_FAVORITES';

// State Type
export interface FavoritesState {
  favorites: Movie[];
}

// Initial State
export const initialState: FavoritesState = {
  favorites: [],
};

// Reducer
export const reducer: Reducer<FavoritesState> = createReducer(initialState, {
  [SET_FAVORITES]: (state, action) => ({
    ...state,
    favorites: action.payload,
  }),
});

// Action Creator Types
export interface AddFavoriteAction extends Action {
  type: typeof ADD_FAVORITE;
  payload: Movie;
}

export interface RemoveFavoriteAction extends Action {
  type: typeof REMOVE_FAVORITE;
  payload: Movie;
}

export interface SetFavoritesAction extends Action {
  type: typeof SET_FAVORITES;
  payload: Movie[];
}

// Action Creators
export const addFavorite: ActionCreator<AddFavoriteAction> = movie => ({
  type: ADD_FAVORITE,
  payload: movie,
});

export const removeFavorite: ActionCreator<RemoveFavoriteAction> = movie => ({
  type: REMOVE_FAVORITE,
  payload: movie,
});

export const setFavorites: ActionCreator<SetFavoritesAction> = movies => ({
  type: SET_FAVORITES,
  payload: movies,
});

// Saga Workers
export function* handleAddFavorite(action: AddFavoriteAction) {
  // Get new favorite from action
  const newFavorite: Movie = action.payload;

  // Get favorites from store
  const { favorites }: FavoritesState = yield select(store => store.favorites);

  // Add new favorite
  const newFavorites: Movie[] = [newFavorite, ...favorites];

  // Dispatch action to update favorites
  yield put(setFavorites(newFavorites));
}

export function* handleRemoveFavorite(action: RemoveFavoriteAction) {
  // Get stale favorite from action
  const staleFavorite: Movie = action.payload;

  // Get favorites from store
  const { favorites }: FavoritesState = yield select(store => store.favorites);

  // Find index of stale favorite
  const staleFavoriteIndex: number = favorites.findIndex(favorite => {
    return favorite._id.$oid === staleFavorite._id.$oid;
  });

  // Remove stale favorite
  const newFavorites: Movie[] = [...favorites];
  newFavorites.splice(staleFavoriteIndex, 1);

  // Dispatch action to update favorites
  yield put(setFavorites(newFavorites));
}

// Saga Watchers
export function* watchAddFavorite() {
  yield takeLatest<AddFavoriteAction>(ADD_FAVORITE, handleAddFavorite);
}

export function* watchRemoveFavorite() {
  yield takeLatest<AddFavoriteAction>(REMOVE_FAVORITE, handleRemoveFavorite);
}

// Saga
export const saga: Saga = function* saga() {
  yield all([watchAddFavorite(), watchRemoveFavorite()]);
};
