import MovieTicketsService from "../services/Movies.service"
import { actionFactory } from "../factories/action.factory"

export const GET_MOVIES_START = "GET_MOVIES_START"
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS"
export const GET_MOVIES_ERROR = "GET_MOVIES_ERROR"

export default class MovieTicketsActions {
  /**
   * Action to call the Movie Ticket service and update Redux with the
   * tickets once is completed.
   *
   * @param {number} skip Start position for list.
   * @param {number} limit Max number of items retrieved.
   * @returns {void} Void.
   */
  static getMovieTickets(skip = 0, limit = 20) {
    return (dispatch) => {
      dispatch(actionFactory(GET_MOVIES_START))
      MovieTicketsService.getMovieTickets(skip, limit)
        .then((response) => {
          dispatch(actionFactory(GET_MOVIES_SUCCESS, response.data))
        })
        .catch((error) => {
          dispatch(actionFactory(GET_MOVIES_ERROR, error))
        })
    }
  }
}
