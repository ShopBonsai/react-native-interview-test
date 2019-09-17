import React from 'react';
import { NavigationScreenComponent } from 'react-navigation';

import OwnedTicketList from '../../containers/OwnedTicketList';

import { Container } from './style';

const Tickets: NavigationScreenComponent = () => {
  return (
    <Container testID="tickets-screen">
      <OwnedTicketList />
    </Container>
  );
};

export default Tickets;
