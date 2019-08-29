import * as AsyncStorage from "../../helpers/localStorage"
import { favouriteKey } from "../../configs/constants"

/**
 * Get all the favorite movies stored on the local storage.
 *
 * @returns {Array} Array of movies Id.
 */
export async function getFavoritedMovies() {
  return await AsyncStorage.getItem(favouriteKey)
}

/**
 * Save all the favorite and remove from favourites movies in the local storage.
 *
 * @param {string} id Movie Id as string.
 * @returns {Array} Array of movies Id.
 */
export async function setFavoritedMovies(id) {
  let list = await AsyncStorage.getItem(favouriteKey)
  list = list ? list : {}
  if (list[id]) {
    // eslint-disable-next-line fp/no-delete
    delete list[id]
  } else {
    list[id] = 1
  }
  await AsyncStorage.setItem(favouriteKey, list)
  return list
}
