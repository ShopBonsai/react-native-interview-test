import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { MovieDetailsInfo } from "../../../components";

/**
 * Returns a styled wrapper for the MovieDetailsInfo component
 * @param {object} props.movie - Object of movie item
 * @param {(object) => void} props.onPress - Event handler for adding a movie to the cart
 * @param {object[]} props.cart - List of all movies currently added to the shopping cart
 */
const MovieDetailsTemplate = (props) => {
  const { movie, onPress, cart } = props;
  const movieDetailsInfoProps = {
    movie,
    onPress,
    cart,
  };

  return (
    <View style={styles.contentWrapper}>
      <MovieDetailsInfo {...movieDetailsInfoProps} />
    </View>
  );
};

export { MovieDetailsTemplate };
