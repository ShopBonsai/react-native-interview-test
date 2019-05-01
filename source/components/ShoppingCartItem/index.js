import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const ShoppingCartItem = (props) => {
  const { movie } = props;
  const { image, title, price } = movie;

  return (
    <View style={styles.contentWrapper}>
      <Image source={{ uri: image }} style={styles.thumbnail} />

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

export { ShoppingCartItem };
