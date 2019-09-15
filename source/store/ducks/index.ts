import { Saga } from 'redux-saga';

import { reducer as feedReducer, saga as feedSaga, FeedState } from './feed';

// Application State Type
export interface ApplicationState {
  feed: FeedState;
}

// Application Reducers
export const reducers = {
  feed: feedReducer,
};

// Application Sagas
export const sagas: Saga[] = [feedSaga];
