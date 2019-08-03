import axios from "../../config/axios.config"
import env from "../../env"

export default class MovieTicketsService {
  /**
   * Service to call Movie Tickets enpoint.
   *
   * @param {number} skip Start position for list.
   * @param {number} limit Max number of items retrieved.
   * @returns {Promise} API call promise.
   */
  static getMovieTickets(skip, limit) {
    return axios.get(env.MOVIES_ENDPOINT, {
      params: {
        skip,
        limit,
      },
    })
  }
}
