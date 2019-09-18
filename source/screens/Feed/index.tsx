import React from 'react';
import { NavigationScreenComponent } from 'react-navigation';

import FeedMovieList from '../../containers/FeedMovieList';

import { Container } from './style';

const Feed: NavigationScreenComponent = () => {
  return (
    <Container testID="feed-screen">
      <FeedMovieList />
    </Container>
  );
};

export default Feed;
