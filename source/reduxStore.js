import { createStore, applyMiddleware, combineReducers } from "redux"

import env from "./env"
import reducers from "./ducks"

export const rootReducer = combineReducers(reducers)
const developmentMiddleware = [require("redux-logger").createLogger({ collapsed: true })]

const middleware = [...(env.IS_DEVELOPMENT ? developmentMiddleware : [])]
const store = createStore(rootReducer, {}, applyMiddleware(...middleware))

export default store
