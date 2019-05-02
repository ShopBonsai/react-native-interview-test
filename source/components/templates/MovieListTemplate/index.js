import React from "react";
import { View } from "react-native";
import { MovieList } from "../../../components";
import { styles } from "./styles";

/**
 * Returns a styled wrapper for the MovieList component
 * @param {object[]} props.movies - List of movie items to display
 * @param {() => void} props.onEndReached - Event handler for loading more movies to the list to display to the user
 * @param {() => void} props.onMoviePress - Event handler for navigating to the movie details page
 */
const MovieListTemplate = (props) => {
  const { movies, onEndReached, onMoviePress } = props;
  const movieListProps = {
    movies,
    onEndReached,
    onMoviePress,
  };

  return (
    <View style={styles.contentWrapper}>
      <MovieList {...movieListProps} />
    </View>
  );
};

export { MovieListTemplate };
