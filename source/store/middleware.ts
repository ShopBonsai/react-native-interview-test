import { Middleware } from 'redux';

import { ApplicationState } from './ducks';
import { clearSelection } from './ducks/tickets';

export const handleRehydrate: Middleware = () => next => action => {
  // Watch for rehydrate action disaptch
  const isRehydrate = action.type === 'persist/REHYDRATE';

  // Only intercept if there is a payload
  if (isRehydrate && action.payload) {
    const persistedState: Partial<ApplicationState> = action.payload;
    const hasTicketDetail: boolean =
      !!persistedState.tickets && !!persistedState.tickets.ticket;

    // Clear selected ticket on startup
    if (hasTicketDetail) {
      next(action);
      next(clearSelection());
      return;
    }
  }

  next(action);
};
