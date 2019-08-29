import * as actionTypes from "../actionTypes"
import service from "../services"

export const addToFavouritesInprogress = () => ({
  type: actionTypes.ADD_TO_FAVROURITES_INPROGRESS,
})
export const addToFavouritesSuccess = data => ({
  type: actionTypes.ADD_TO_FAVROURITES_SUCCESS,
  data,
})

export function addToFavourites(id) {
  return async dispatch => {
    dispatch(addToFavouritesInprogress())
    const list = await service.setFavoritedMovies(id)
    dispatch(addToFavouritesSuccess(list))
  }
}

export const fetchFavouritesInprogress = () => ({
  type: actionTypes.FETCH_FAVROURITES_INPROGRESS,
})
export const fetchFavouritesSuccess = data => ({
  type: actionTypes.FETCH_FAVROURITES_SUCCESS,
  data,
})

export function fetchFavourites() {
  return async dispatch => {
    dispatch(fetchFavouritesInprogress())
    const list = await service.getFavoritedMovies()
    dispatch(fetchFavouritesSuccess(list))
  }
}
