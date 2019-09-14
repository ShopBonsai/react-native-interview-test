import React from 'react';
import { Text } from 'react-native';
import { NavigationScreenComponent } from 'react-navigation';

import { Container } from './style';

const Tickets: NavigationScreenComponent = () => {
  return (
    <Container testID="tickets-screen">
      <Text>Tickets</Text>
    </Container>
  );
};

export default Tickets;
