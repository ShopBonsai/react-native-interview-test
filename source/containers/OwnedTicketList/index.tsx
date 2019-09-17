import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Placeholder from '../../atoms/Placeholder';
import TicketList from '../../organisms/TicketList';
import { ApplicationState } from '../../store/ducks';
import { setTicket, TicketsState } from '../../store/ducks/tickets';
import Ticket from '../../models/ticket';

const OwnedTicketList: React.FC = () => {
  // Get values from tickets store state
  const { tickets } = useSelector<ApplicationState, TicketsState>(
    store => store.tickets,
  );

  // Get dispatcher
  const dispatch = useDispatch();

  // Dispatch action to select ticket on ticket selected from list
  const handleTicketSelect = (ticket: Ticket) => {
    dispatch(setTicket(ticket));
  };

  // If there is no ticket, render placeholder
  if (tickets.length <= 0) {
    return <Placeholder iconName="ticket">No tickets yet</Placeholder>;
  }

  return <TicketList tickets={tickets} onSelectTicket={handleTicketSelect} />;
};

export default OwnedTicketList;
