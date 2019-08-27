import * as actionTypes from "../actionTypes"
import { favouriteKey } from "../../configs/constants"
import * as storage from "../../helpers/localStorage"

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
    let list = await storage.getItem(favouriteKey)
    list = list ? list : {}
    if (list[id]) {
      // eslint-disable-next-line fp/no-delete
      delete list[id]
    } else {
      list[id] = 1
    }
    await storage.setItem(favouriteKey, list)
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
    const list = await storage.getItem(favouriteKey)
    dispatch(fetchFavouritesSuccess(list))
  }
}
