import React from "react";
import { FlatList } from "react-native";
import { MovieThumbnail } from "../../../components";

/**
 * Returns a styled component listing movie thumbnails
 * @param {object[]} props.movies - List of movie items to display
 * @param {() => void} props.onEndReached - Event handler for loading more movies to the list to display to the user
 * @param {() => void} props.onMoviePress - Event handler for navigating to the movie details page
 */
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
