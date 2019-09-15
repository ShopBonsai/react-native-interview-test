import { reducer as feedReducer, saga as feedSaga, FeedState } from './feed';
import {
  reducer as favoritesReducer,
  saga as favoritesSaga,
  FavoritesState,
} from './favorites';

// Application State Type
export interface ApplicationState {
  feed: FeedState;
  favorites: FavoritesState;
}

// Application Reducers
export const reducers = {
  feed: feedReducer,
  favorites: favoritesReducer,
};

// Application Sagas
export const sagas: IterableIterator<any>[] = [feedSaga(), favoritesSaga()];
