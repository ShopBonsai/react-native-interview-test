import { reducer as feedReducer, saga as feedSaga, FeedState } from './feed';
import {
  reducer as favoritesReducer,
  saga as favoritesSaga,
  FavoritesState,
} from './favorites';
import { reducer as detailsReducer, DetailsState } from './details';
import {
  reducer as ticketsReducer,
  saga as ticketsSaga,
  TicketsState,
} from './tickets';
import { reducer as cartReducer, saga as cartSaga, CartState } from './cart';

// Application State Type
export interface ApplicationState {
  feed: FeedState;
  favorites: FavoritesState;
  details: DetailsState;
  tickets: TicketsState;
  cart: CartState;
}

// Application Reducers
export const reducers = {
  feed: feedReducer,
  favorites: favoritesReducer,
  details: detailsReducer,
  tickets: ticketsReducer,
  cart: cartReducer,
};

// Application Sagas
export const sagas: IterableIterator<any>[] = [
  feedSaga(),
  favoritesSaga(),
  ticketsSaga(),
  cartSaga(),
];
