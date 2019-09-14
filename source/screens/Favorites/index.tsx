import React from 'react';
import { Text } from 'react-native';
import { NavigationScreenComponent } from 'react-navigation';

import { Container } from './style';

const Favorites: NavigationScreenComponent = () => {
  return (
    <Container testID="favorites-screen">
      <Text>Favorites</Text>
    </Container>
  );
};

export default Favorites;
