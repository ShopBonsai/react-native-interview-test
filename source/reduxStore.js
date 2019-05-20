import { createStore, applyMiddleware, combineReducers, compose } from "redux"

import createSagaMiddleware from "redux-saga"

import reducers from "./config/reducer"
import rootSaga from "./config/saga"

const sagaMiddleware = createSagaMiddleware()
const middleWare = [sagaMiddleware]

export const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer, {}, compose(applyMiddleware(...middleWare)))

sagaMiddleware.run(rootSaga)

export default store
