import React from 'react';
import { Text } from 'react-native';
import { NavigationScreenComponent } from 'react-navigation';

import { Container } from './style';

const Main: NavigationScreenComponent = () => {
  return (
    <Container testID="main">
      <Text>Title</Text>
    </Container>
  );
};

export default Main;
