import { reducer as feedReducer, saga as feedSaga, FeedState } from './feed';
import {
  reducer as favoritesReducer,
  saga as favoritesSaga,
  FavoritesState,
} from './favorites';
import { reducer as detailsReducer, DetailsState } from './details';

// Application State Type
export interface ApplicationState {
  feed: FeedState;
  favorites: FavoritesState;
  details: DetailsState;
}

// Application Reducers
export const reducers = {
  feed: feedReducer,
  favorites: favoritesReducer,
  details: detailsReducer,
};

// Application Sagas
export const sagas: IterableIterator<any>[] = [feedSaga(), favoritesSaga()];
