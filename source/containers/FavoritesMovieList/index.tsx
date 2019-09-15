import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Placeholder from '../../atoms/Placeholder';
import MovieList from '../../organisms/MovieList';
import { ApplicationState } from '../../store/ducks';
import {
  addFavorite,
  removeFavorite,
  FavoritesState,
} from '../../store/ducks/favorites';
import Movie from '../../models/movie';

const FavoritesMovieList: React.FC = () => {
  // Get values from favorites store state
  const { favorites } = useSelector<ApplicationState, FavoritesState>(
    store => store.favorites,
  );

  // Get dispatcher
  const dispatch = useDispatch();

  // Dispatch action to update favorites when a movie is favorites/unfavorited
  const handleFavorite = (movie: Movie, isFavorite: boolean): void => {
    if (isFavorite) {
      dispatch(addFavorite(movie));
    } else {
      dispatch(removeFavorite(movie));
    }
  };

  if (favorites.length <= 0) {
    return <Placeholder iconName="heart-o">No favorites yet</Placeholder>;
  }

  return (
    <MovieList
      movies={favorites}
      favorites={favorites}
      onFavorite={handleFavorite}
    />
  );
};

export default FavoritesMovieList;
