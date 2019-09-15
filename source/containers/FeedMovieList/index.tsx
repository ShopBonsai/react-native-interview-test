import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Placeholder from '../../atoms/Placeholder';
import ExpandView from '../../atoms/ExpandView';
import ErrorMessage from '../../atoms/ErrorMessage';
import LinkButton from '../../atoms/LinkButton';
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
  const { errorMessage, loading, movies, page, pageSize } = useSelector<
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

  // Dispatch action to reload same page
  const handleTryAgain = (): void => {
    dispatch(fetchMoviesRequest({ page, pageSize, movies }));
  };

  // Dispatch action to update favorites when a movie is favorites/unfavorited
  const handleFavorite = (movie: Movie, isFavorite: boolean): void => {
    if (isFavorite) {
      dispatch(addFavorite(movie));
    } else {
      dispatch(removeFavorite(movie));
    }
  };

  if (movies.length <= 0 && !loading) {
    return <Placeholder>No movie found</Placeholder>;
  }

  if (errorMessage) {
    return (
      <ExpandView>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <LinkButton onPress={handleTryAgain}>Try Again</LinkButton>
      </ExpandView>
    );
  }

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
