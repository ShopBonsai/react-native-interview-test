import React from 'react';
import { Text } from 'react-native';
import { NavigationScreenComponent } from 'react-navigation';

import { Container } from './style';

const Feed: NavigationScreenComponent = () => {
  return (
    <Container testID="feed-screen">
      <Text>Feed</Text>
    </Container>
  );
};

export default Feed;
