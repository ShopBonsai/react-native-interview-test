import {
  createStore,
  applyMiddleware,
  combineReducers,
  Reducer,
  Middleware,
  Store,
} from 'redux';
import { createLogger } from 'redux-logger';

import env from '../env';

import reducers, { ApplicationState } from './ducks';

export const rootReducer: Reducer<ApplicationState> = combineReducers(reducers);
const developmentMiddleware: Middleware[] = [createLogger({ collapsed: true })];

const middleware: Middleware[] = [
  ...(env.IS_DEVELOPMENT ? developmentMiddleware : []),
];

const store: Store<ApplicationState> = createStore(
  rootReducer,
  {},
  applyMiddleware(...middleware),
);

export default store;
