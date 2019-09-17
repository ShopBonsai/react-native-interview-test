import {
  createStore,
  applyMiddleware,
  combineReducers,
  Reducer,
  Middleware,
  Store,
} from 'redux';
import {
  persistStore,
  persistReducer,
  PersistConfig,
  Persistor,
} from 'redux-persist';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware, { SagaMiddleware, Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';

import env from '../env';

import { reducers, sagas, ApplicationState } from './ducks';

// Root Reducer
const rootReducer: Reducer<ApplicationState> = combineReducers(reducers);

// Persist Config
const persistConfig: PersistConfig<ApplicationState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorites', 'tickets'],
};

// Persist Reducer
type PersistedReducer = Reducer<ApplicationState & PersistPartial>;
const persistedReducer: PersistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

// Root Saga
const rootSaga: Saga = function* rootSaga() {
  // Execute all sagas
  yield all(sagas);
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
  persistedReducer,
  {},
  applyMiddleware(...middleware),
);

// Run Saga
sagaMiddleware.run(rootSaga);

// RUn Persist
export const persistor: Persistor = persistStore(store);

export default store;
