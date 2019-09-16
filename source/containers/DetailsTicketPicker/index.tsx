import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TicketAmountPicker from '../../organisms/TicketAmountPicker';
import { ApplicationState } from '../../store/ducks';
import { DetailsState, selectTicket } from '../../store/ducks/details';
import Ticket from '../../models/ticket';

const DetailsTicketPicker: React.FC = () => {
  // Get values from tickets store state
  const { movie, ticket } = useSelector<ApplicationState, DetailsState>(
    store => store.details,
  );

  // Get dispatcher
  const dispatch = useDispatch();

  // Prevent render if movie is not set
  if (!movie) {
    return null;
  }

  // Update ticket selection upon change
  const handleChange = (amount: number): void => {
    const selectedTicket: Ticket = { amount, movie };
    dispatch(selectTicket(selectedTicket));
  };

  return (
    <TicketAmountPicker
      price={movie.price}
      inventory={movie.inventory}
      onChange={handleChange}
      value={ticket ? ticket.amount : 0}
    />
  );
};

export default DetailsTicketPicker;
