import env from "../env"

import { FETCH_MOVIE_TICKETS, SET_MOVIE_TICKETS } from "./movie-tickets"

import { takeEvery, call, put } from "redux-saga/effects"

/**
 * ==========================================================================================================================
 * Functions to get server response
 * ==========================================================================================================================
 */

function getMovieTickets() {
  return fetch(env.API_URL_PRODUCTION, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json", // specifying the Content-Type
    }),
  })
}

/**
 * ==========================================================================================================================
 * Functions to handle reducers actions and iniitiate api calls
 * ==========================================================================================================================
 */

const fetchMovieTickets = function*(action) {
  const response = yield call(getMovieTickets)
  const result = yield response.json()

  if (result.length >= 1) {
    yield put({
      type: SET_MOVIE_TICKETS,
      result,
    })
    yield call(action.onSuccess)
  } else {
    return yield call(action.onError)
  }
}

/**
 * ==========================================================================================================================
 * Listener for redux actions
 * ==========================================================================================================================
 */

const rootSaga = function*() {
  yield takeEvery(FETCH_MOVIE_TICKETS, fetchMovieTickets)
}

export default rootSaga
