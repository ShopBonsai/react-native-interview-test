import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TicketAmountPicker from '../../organisms/TicketAmountPicker';
import { ApplicationState } from '../../store/ducks';
import { TicketsState, setTicket } from '../../store/ducks/tickets';
import Movie from '../../models/movie';

export interface Props {
  movie: Movie;
}

const TicketPicker: React.FC<Props> = ({ movie }) => {
  // Get values from tickets store state
  const { ticket } = useSelector<ApplicationState, TicketsState>(
    store => store.tickets,
  );

  // Get dispatcher
  const dispatch = useDispatch();

  // Update ticket amount upon change
  const handleChange = (amount: number): void => {
    dispatch(setTicket({ amount, movie }));
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

export default TicketPicker;
