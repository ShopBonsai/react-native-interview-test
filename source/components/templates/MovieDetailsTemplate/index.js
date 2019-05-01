import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { MovieDetailsInfo } from "../../../components";

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
