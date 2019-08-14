import AsyncStorage from "@react-native-community/async-storage"

import env from "../../env"

export default class FavoriteMoviesService {
  /**
   * Get all the favorite movies stored on the local storage.
   *
   * @returns {Promise} AsyncStorage promise.
   */
  static getFavoritedMovies() {
    return AsyncStorage.getItem(env.LOCAL_MOVIES_KEY).then((response) => {
      return Promise.resolve(JSON.parse(response))
    })
  }

  /**
   * Save all the favorite movies in the local storage.
   *
   * @param {Array} favoritedMovies Array of movies Id.
   * @returns {Promise} AsyncStorage promise for saving.
   */
  static setFavoritedMovies(favoritedMovies) {
    return AsyncStorage.setItem(env.LOCAL_MOVIES_KEY, JSON.stringify(favoritedMovies))
  }
}
