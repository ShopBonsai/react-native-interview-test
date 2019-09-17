import { Reducer, Action, ActionCreator } from 'redux';
import { Saga } from 'redux-saga';
import { put, takeLatest, all, select } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';

import createReducer from '../createReducer';
import Ticket from '../../models/ticket';

// Action Types
export const SET_TICKET: string = 'cart/SET_TICKET';
export const SET_TICKETS: string = 'cart/SET_TICKETS';
export const CLEAR_CART: string = 'cart/CLEAR_CART';

// State Type
export interface CartState {
  tickets: Ticket[];
}

// Initial State
export const initialState: CartState = {
  tickets: [],
};

// Reducer
export const reducer: Reducer<CartState> = createReducer(initialState, {
  [SET_TICKETS]: (state, action) => ({
    ...state,
    tickets: action.payload,
  }),
  [CLEAR_CART]: state => ({
    ...state,
    tickets: initialState.tickets,
  }),
});

// Action Creator Types
export interface SetTicketAction extends Action {
  type: typeof SET_TICKET;
  payload: {
    ticket: Ticket;
    giveFeedback: boolean;
  };
}

export interface SetTicketsAction extends Action {
  type: typeof SET_TICKETS;
  payload: Ticket[];
}

export interface ClearCartAction extends Action {
  type: typeof CLEAR_CART;
}

// Action Creators
export const setTicket: ActionCreator<SetTicketAction> = (
  ticket,
  giveFeedback = true,
) => ({
  type: SET_TICKET,
  payload: {
    ticket,
    giveFeedback,
  },
});

export const setTickets: ActionCreator<SetTicketsAction> = tickets => ({
  type: SET_TICKETS,
  payload: tickets,
});

export const clearCart: ActionCreator<ClearCartAction> = () => ({
  type: CLEAR_CART,
});

// Saga Workers
export function* handleSetTicket(action: SetTicketAction) {
  // Get ticket and options from action
  const { giveFeedback, ticket } = action.payload;

  // Get tickets from store
  const { tickets }: CartState = yield select(store => store.cart);

  // Find index of new ticket inside owned tickets array
  const ticketIndex: number = tickets.findIndex(cartTicket => {
    return cartTicket.movie._id.$oid === ticket.movie._id.$oid;
  });

  // In case ticket is already owned, simply update array entry
  // otherwise, add the new ticket to the owned tickets array
  const isTicketOwned: boolean = ticketIndex !== -1;
  const newTickets: Ticket[] = [...tickets];
  if (isTicketOwned) {
    newTickets[ticketIndex] = ticket;
  } else {
    newTickets.push(ticket);
  }

  // Dispatch action to update favorites
  yield put(setTickets(newTickets));

  // Give feedback to user
  if (giveFeedback) {
    showMessage({ message: 'Ticket(s) added to cart!', type: 'success' });
  }
}

// Saga Watchers
export function* watchSetTicket() {
  yield takeLatest<SetTicketAction>(SET_TICKET, handleSetTicket);
}

// Saga
export const saga: Saga = function* saga() {
  yield all([watchSetTicket()]);
};
