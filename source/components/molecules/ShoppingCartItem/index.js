import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ICONS_CROSS } from "../../../../assets/icons";

const ShoppingCartItem = (props) => {
  const { movie, onRemoveItem } = props;
  const { image, title, price, id } = movie;

  _handleRemoveMovie = () => onRemoveItem(id);

  return (
    <View style={styles.contentWrapper}>
      <TouchableOpacity onPress={_handleRemoveMovie}>
        <Image source={ICONS_CROSS} style={styles.removeButton} />
      </TouchableOpacity>

      <Image source={{ uri: image }} style={styles.thumbnail} />

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>{`$${price.toFixed(2)}`}</Text>
      </View>
    </View>
  );
};

export { ShoppingCartItem };
