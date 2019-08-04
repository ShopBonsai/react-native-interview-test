import MovieTicketsService from "../services/Movies.service"
import { actionFactory } from "../factories/action.factory"

export const GET_MOVIES_START = "GET_MOVIES_START"
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS"
export const GET_MOVIES_ERROR = "GET_MOVIES_ERROR"
export const GET_MORE_MOVIES_START = "GET_MORE_MOVIES_START"
export const GET_MORE_MOVIES_SUCCESS = "GET_MORE_MOVIES_SUCCESS"

export default class MovieTicketsActions {
  /**
   * Action to call the Movie Ticket service and update Redux with the
   * tickets once is completed.
   *
   * @param {number} skip Start position for list.
   * @param {number} limit Max number of items retrieved.
   * @param {boolean} isFetchingMoreMovies  Used to indicate that are new movies fetching.
   * @returns {void} Void.
   */
  static getMovieTickets(skip = 0, limit = 20, isFetchingMoreMovies = false) {
    return (dispatch) => {
      dispatch(actionFactory(isFetchingMoreMovies ? GET_MORE_MOVIES_START : GET_MOVIES_START))
      MovieTicketsService.getMovieTickets(skip, limit)
        .then((response) => {
          dispatch(
            actionFactory(
              isFetchingMoreMovies ? GET_MORE_MOVIES_SUCCESS : GET_MOVIES_SUCCESS,
              response.data,
            ),
          )
        })
        .catch((error) => {
          dispatch(actionFactory(GET_MOVIES_ERROR, error))
        })
    }
  }
}
