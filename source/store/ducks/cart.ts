import { Reducer, Action, ActionCreator } from 'redux';
import { Saga } from 'redux-saga';
import { put, takeLatest, all, select } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';

import createReducer from '../createReducer';
import Ticket from '../../models/ticket';

// Action Types
export const ADD_TICKET: string = 'cart/ADD_TICKET';
export const REMOVE_TICKET: string = 'cart/REMOVE_TICKET';
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
export interface AddTicketAction extends Action {
  type: typeof ADD_TICKET;
  payload: {
    ticket: Ticket;
    giveFeedback: boolean;
  };
}

export interface RemoveTicketAction extends Action {
  type: typeof REMOVE_TICKET;
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
export const addTicket: ActionCreator<AddTicketAction> = (
  ticket,
  giveFeedback = true,
) => ({
  type: ADD_TICKET,
  payload: {
    ticket,
    giveFeedback,
  },
});

export const removeTicket: ActionCreator<RemoveTicketAction> = (
  ticket,
  giveFeedback = true,
) => ({
  type: REMOVE_TICKET,
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
export function* handleAddTicket(action: AddTicketAction) {
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
    showMessage({ message: 'Cart updated!', type: 'success', icon: 'success' });
  }
}

export function* handleRemoveTicket(action: RemoveTicketAction) {
  // Get ticket and options from action
  const { giveFeedback, ticket } = action.payload;

  // Get tickets from store
  const { tickets }: CartState = yield select(store => store.cart);

  // Find index of new ticket inside owned tickets array
  const ticketIndex: number = tickets.findIndex(cartTicket => {
    return cartTicket.movie._id.$oid === ticket.movie._id.$oid;
  });

  // Completely remove ticket from cart regarless the amount
  const newTickets: Ticket[] = [...tickets];
  newTickets.splice(ticketIndex, 1);

  // Dispatch action to update favorites
  yield put(setTickets(newTickets));

  // Give feedback to user
  if (giveFeedback) {
    showMessage({ message: 'Cart updated!', type: 'success', icon: 'success' });
  }
}

// Saga Watchers
export function* watchAddTicket() {
  yield takeLatest<AddTicketAction>(ADD_TICKET, handleAddTicket);
}

export function* watchRemoveTicket() {
  yield takeLatest<AddTicketAction>(REMOVE_TICKET, handleRemoveTicket);
}

// Saga
export const saga: Saga = function* saga() {
  yield all([watchAddTicket(), watchRemoveTicket()]);
};
