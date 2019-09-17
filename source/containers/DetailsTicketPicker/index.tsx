import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TicketAmountPicker from '../../organisms/TicketAmountPicker';
import { ApplicationState } from '../../store/ducks';
import { DetailsState, selectTicket } from '../../store/ducks/details';
import { CartState } from '../../store/ducks/cart';
import Ticket from '../../models/ticket';

const DetailsTicketPicker: React.FC = () => {
  // Get values from tickets store state
  const { movie, ticket } = useSelector<ApplicationState, DetailsState>(
    store => store.details,
  );

  // Get values from tickets cart state
  const { tickets } = useSelector<ApplicationState, CartState>(
    store => store.cart,
  );

  // Get dispatcher
  const dispatch = useDispatch();

  // Get amount of the ticket from cart upon mount
  useEffect(() => {
    if (!movie) {
      return;
    }

    const cartTicket = tickets.find(currentCartTicket => {
      return currentCartTicket.movie._id.$oid === movie._id.$oid;
    });

    if (cartTicket) {
      dispatch(selectTicket(cartTicket));
    }
  }, [movie, tickets, dispatch]);

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
