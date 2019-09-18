import React, { useMemo, useRef } from 'react';
import { ActivityIndicator, ListRenderItem } from 'react-native';

import MovieCard from '../../molecules/MovieCard';
import Movie from '../../models/movie';

import { Container, FlatList, ItemContainer, LoadingContainer } from './style';

export interface Props {
  movies: Movie[];
  favorites: Movie[];
  loading?: boolean;
  onEndReached?: () => void;
  onFavorite?: (movie: Movie, isFavorite: boolean) => void;
  onSelectMovie?: (movie: Movie) => void;
}

const MovieList: React.FC<Props> = ({
  favorites,
  loading,
  movies,
  onEndReached,
  onFavorite,
  onSelectMovie,
}) => {
  // Cache favorite ids for further comparison
  const favoriteIds = useMemo<string[]>(
    () => favorites.map(favorite => favorite._id.$oid),
    [favorites],
  );

  // Flag to prevent FlatList onEndReached from being called
  // more than once during scroll momentum
  const reachedEndDuringMomentum = useRef<boolean>(false);

  // Movie item renderer
  const renderItem: ListRenderItem<Movie> = ({ index, item }) => {
    // Delegate movie favorited/unfavorited callback to parent
    const handleFavorite = (isFavorite: boolean): void => {
      if (onFavorite) {
        onFavorite(item, isFavorite);
      }
    };

    // Delegate movie select callback to parent
    const handlePress = (): void => {
      if (onSelectMovie) {
        onSelectMovie(item);
      }
    };

    // Verifies if movie is included in favorites
    const isFavorite: boolean = favoriteIds.includes(item._id.$oid);

    return (
      <ItemContainer>
        <MovieCard
          title={item.title}
          image={item.image}
          onFavorite={handleFavorite}
          onPress={handlePress}
          isFavorite={isFavorite}
          testID={`movie-card-${index}`}
        />
      </ItemContainer>
    );
  };

  // Footer Renderer
  const renderFooter = (): JSX.Element | null => {
    // Do not render anything in case list is not in loading state
    if (!loading) return null;

    // Else render activity indicator (list is in loading state)
    return (
      <LoadingContainer>
        <ActivityIndicator color="#1685fb" testID="loading" />
      </LoadingContainer>
    );
  };

  // onEndReached callback
  const handleEndReached = (): void => {
    // If there is a callback to be called AND scroll is not during momentum
    if (onEndReached && !reachedEndDuringMomentum.current) {
      // Set momentum to true and call parent callback;
      reachedEndDuringMomentum.current = true;
      onEndReached();
    }
  };

  // onMomentumScrollBegin callback
  const handleMomentum = (): void => {
    // Reset scroll momentum flag
    reachedEndDuringMomentum.current = false;
  };

  return (
    <Container testID="movie-list">
      <FlatList
        data={movies}
        renderItem={renderItem as ListRenderItem<unknown>}
        keyExtractor={item => (item as Movie)._id.$oid}
        onEndReachedThreshold={0.3}
        onEndReached={handleEndReached}
        ListFooterComponent={renderFooter}
        onMomentumScrollBegin={handleMomentum}
      />
    </Container>
  );
};

export default MovieList;
