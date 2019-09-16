import { Reducer, Action, ActionCreator } from 'redux';
import { Saga } from 'redux-saga';
import { put, takeLatest, all, select } from 'redux-saga/effects';

import createReducer from '../createReducer';
import Ticket from '../../models/ticket';

// Action Types
export const ADD_TICKET: string = 'tickets/ADD_TICKET';
export const SET_TICKET: string = 'tickets/SET_TICKET';
export const SET_TICKETS: string = 'tickets/SET_TICKETS';
export const CLEAR_SELECTION: string = 'tickets/CLEAR_SELECTION';

// State Type
export interface TicketsState {
  tickets: Ticket[];
  ticket?: Ticket;
}

// Initial State
export const initialState: TicketsState = {
  tickets: [],
  ticket: undefined,
};

// Reducer
export const reducer: Reducer<TicketsState> = createReducer(initialState, {
  [SET_TICKET]: (state, action) => ({
    ...state,
    ticket: action.payload,
  }),
  [SET_TICKETS]: (state, action) => ({
    ...state,
    tickets: action.payload,
  }),
  [CLEAR_SELECTION]: state => ({
    ...state,
    ticket: initialState.ticket,
  }),
});

// Action Creator Types
export interface AddTicketAction extends Action {
  type: typeof ADD_TICKET;
  payload: Ticket;
}

export interface SetTicketAction extends Action {
  type: typeof SET_TICKET;
  payload: Ticket;
}

export interface SetTicketsAction extends Action {
  type: typeof SET_TICKETS;
  payload: Ticket[];
}

export interface ClearSelectionAction extends Action {
  type: typeof CLEAR_SELECTION;
}

// Action Creators
export const addTicket: ActionCreator<AddTicketAction> = ticket => ({
  type: ADD_TICKET,
  payload: ticket,
});

export const setTicket: ActionCreator<SetTicketAction> = ticket => ({
  type: SET_TICKET,
  payload: ticket,
});

export const setTickets: ActionCreator<SetTicketsAction> = tickets => ({
  type: SET_TICKET,
  payload: tickets,
});

export const clearSelection: ActionCreator<ClearSelectionAction> = () => ({
  type: CLEAR_SELECTION,
});

// Saga Workers
export function* handleAddTicket(action: AddTicketAction) {
  // Get new ticket from action
  const newTicket: Ticket = action.payload;

  // Get tickets from store
  const { tickets }: TicketsState = yield select(store => store.tickets);

  // Find index of new ticket inside owned tickets array
  const newTicketIndex: number = tickets.findIndex(ticket => {
    return ticket.movie._id.$oid === newTicket.movie._id.$oid;
  });

  // In case ticket is already owned, simply increase the amount of tickets
  // otherwise, add the new ticket to the owned tickets array
  const isNewTicketOwned: boolean = newTicketIndex !== -1;
  const newTickets: Ticket[] = [...tickets];
  if (isNewTicketOwned) {
    newTickets[newTicketIndex].amount += newTicket.amount;
  } else {
    newTickets.unshift(newTicket);
  }

  // Dispatch action to update favorites
  yield put(setTickets(newTickets));
}

// Saga Watchers
export function* watchAddTicket() {
  yield takeLatest<AddTicketAction>(ADD_TICKET, handleAddTicket);
}

// Saga
export const saga: Saga = function* saga() {
  yield all([watchAddTicket()]);
};
