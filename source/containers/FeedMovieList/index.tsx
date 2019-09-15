import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieList from '../../organisms/MovieList';
import { ApplicationState } from '../../store/ducks';
import { fetchMoviesRequest, FeedState } from '../../store/ducks/feed';
import {
  addFavorite,
  removeFavorite,
  FavoritesState,
} from '../../store/ducks/favorites';
import Movie from '../../models/movie';

const FeedMovieList: React.FC = () => {
  // Get values from feed store state
  const { loading, movies, page, pageSize } = useSelector<
    ApplicationState,
    FeedState
  >(store => store.feed);

  // Get values from favorites store state
  const { favorites } = useSelector<ApplicationState, FavoritesState>(
    store => store.favorites,
  );

  // Get dispatcher
  const dispatch = useDispatch();

  // Load first movies page on mount
  useEffect(() => {
    dispatch(fetchMoviesRequest({ page: 1, pageSize }));
  }, [dispatch, pageSize]);

  // Dispatch action to load next page when end of list is reached
  const handleEndReached = (): void => {
    dispatch(fetchMoviesRequest({ page: page + 1, pageSize, movies }));
  };

  // Dispatch action to update favorites when a movie is favorites/unfavorited
  const handleFavorite = (movie: Movie, isFavorite: boolean): void => {
    if (isFavorite) {
      dispatch(addFavorite(movie));
    } else {
      dispatch(removeFavorite(movie));
    }
  };

  return (
    <MovieList
      movies={movies}
      favorites={favorites}
      loading={loading}
      onEndReached={handleEndReached}
      onFavorite={handleFavorite}
    />
  );
};

export default FeedMovieList;