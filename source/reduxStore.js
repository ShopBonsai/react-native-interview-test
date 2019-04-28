import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

import env from "./env";
import reducers from "./ducks";

export const rootReducer = combineReducers(reducers);
const developmentMiddleware = [require("redux-logger").createLogger({ collapsed: true })];

const middleware = [...(env.IS_DEVELOPMENT ? developmentMiddleware : [])];
const store = createStore(rootReducer, {}, applyMiddleware(...middleware, ReduxThunk));

export default store;
