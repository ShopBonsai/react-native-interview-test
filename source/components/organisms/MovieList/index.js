import React from "react";
import { FlatList } from "react-native";
import { MovieThumbnail } from "../../../components";

const MovieList = (props) => {
  const { movies, onEndReached, onMoviePress } = props;
  const _movieKeyExtractor = (item) => item.id;

  return (
    <FlatList
      data={movies}
      keyExtractor={_movieKeyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.7}
      renderItem={({ item }) => <MovieThumbnail movie={item} onPress={onMoviePress} />}
    />
  );
};

export { MovieList };
