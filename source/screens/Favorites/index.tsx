import React from 'react';
import { NavigationScreenComponent } from 'react-navigation';

import FavoritesMovieList from '../../containers/FavoritesMovieList';

import { Container } from './style';

const Favorites: NavigationScreenComponent = () => {
  return (
    <Container testID="favorites-screen">
      <FavoritesMovieList />
    </Container>
  );
};

export default Favorites;
