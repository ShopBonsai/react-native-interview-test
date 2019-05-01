import React from "react";
import { View } from "react-native";
import { MovieList } from "../../../components";
import { styles } from "./styles";

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
