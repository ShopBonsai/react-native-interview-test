import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TicketDetails from '../../organisms/TicketDetails';
import BottomSheet from '../../organisms/BottomSheet';
import { ApplicationState } from '../../store/ducks';
import { clearSelection, TicketsState } from '../../store/ducks/tickets';

const TicketBottomSheet: React.FC = () => {
  // Get values from tickets store state
  const { ticket } = useSelector<ApplicationState, TicketsState>(
    store => store.tickets,
  );

  // Get dispatcher
  const dispatch = useDispatch();

  // Dispatch action to clear selected ticket on bottom sheet close
  const handleClose = (): void => {
    dispatch(clearSelection());
  };

  // Render bottom sheet content
  const renderContent = (): JSX.Element | null => {
    // Prevent render if there is no ticket selected
    return ticket ? <TicketDetails ticket={ticket} /> : null;
  };

  return (
    <BottomSheet visible={!!ticket} onClose={handleClose}>
      {renderContent()}
    </BottomSheet>
  );
};

export default TicketBottomSheet;
