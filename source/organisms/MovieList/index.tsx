import React, { useRef } from 'react';
import { FlatList, ActivityIndicator, ListRenderItem } from 'react-native';

import MovieCard from '../../molecules/MovieCard';
import Movie from '../../models/movie';

import { Container, ItemContainer, LoadingContainer } from './style';

export interface Props {
  movies: Movie[];
  loading?: boolean;
  onEndReached?: () => void;
}

const MovieList: React.FC<Props> = ({ loading, movies, onEndReached }) => {
  const reachedEndDuringMomentum = useRef<boolean>(false);

  const renderItem: ListRenderItem<Movie> = ({ item }) => {
    return (
      <ItemContainer>
        <MovieCard title={item.title} image={item.image} />
      </ItemContainer>
    );
  };

  const renderFooter = (): JSX.Element | null => {
    if (!loading) return null;

    return (
      <LoadingContainer>
        <ActivityIndicator color="#1685fb" />
      </LoadingContainer>
    );
  };

  const handleEndReached = (): void => {
    if (onEndReached && !reachedEndDuringMomentum.current) {
      reachedEndDuringMomentum.current = true;
      onEndReached();
    }
  };

  const handleMomentum = (): void => {
    reachedEndDuringMomentum.current = false;
  };

  return (
    <Container>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item._id.$oid}
        onEndReachedThreshold={0}
        onEndReached={handleEndReached}
        ListFooterComponent={renderFooter}
        onMomentumScrollBegin={handleMomentum}
      />
    </Container>
  );
};

export default MovieList;
