import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunk from "redux-thunk"

import env from "./env"
import reducers from "./core/reducers"

export const rootReducer = combineReducers(reducers)

const devComposedStore = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (val) => val,
)(createStore)

const composedStore = compose(applyMiddleware(thunk))(createStore)

const store = (initialStore) =>
  env.IS_DEVELOPMENT
    ? devComposedStore(rootReducer, initialStore)
    : composedStore(rootReducer, initialStore)

export default store
