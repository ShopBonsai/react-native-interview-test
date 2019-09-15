import {
  createStore,
  applyMiddleware,
  combineReducers,
  Reducer,
  Middleware,
  Store,
} from 'redux';
import createSagaMiddleware, { SagaMiddleware, Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';

import env from '../env';

import { reducers, sagas, ApplicationState } from './ducks';

// Root Reducer
export const rootReducer: Reducer<ApplicationState> = combineReducers(reducers);

// Root Saga
export const rootSaga: Saga = function* rootSaga() {
  // Execute all sagas
  yield all(sagas.map(saga => saga()));
};

// Middleware
const developmentMiddleware: Middleware[] = [createLogger({ collapsed: true })];
const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const middleware: Middleware[] = [
  ...(env.IS_DEVELOPMENT ? developmentMiddleware : []),
  sagaMiddleware,
];

// Store
const store: Store<ApplicationState> = createStore(
  rootReducer,
  {},
  applyMiddleware(...middleware),
);

// Run Saga
sagaMiddleware.run(rootSaga);

export default store;
