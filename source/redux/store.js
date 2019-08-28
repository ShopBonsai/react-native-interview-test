/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import env from '../env'
import reducers from './reducers'

export const rootReducer = combineReducers(reducers)
const developmentMiddleware = [require('redux-logger').createLogger({ collapsed: true }), thunk]

const middleware = [...(env.IS_DEVELOPMENT ? developmentMiddleware : [thunk])]
const store = createStore(rootReducer, {}, applyMiddleware(...middleware))

export default store
