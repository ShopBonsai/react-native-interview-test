import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"

import env from "./env"
import reducers from "./core/reducers"

export const rootReducer = combineReducers(reducers)

const devComposedStore = compose(
  applyMiddleware(logger, thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : val => val,
)(createStore)

const composedStore = compose(applyMiddleware(thunk))(createStore)

const store = env.IS_DEVELOPMENT ? devComposedStore(rootReducer) : composedStore(rootReducer)

export default store
