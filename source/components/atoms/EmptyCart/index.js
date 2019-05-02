import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

/**
 * Returns a styled component to show the cart is empty
 */
const EmptyCart = () => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.message}>Your cart is currently empty.</Text>
    </View>
  );
};

export { EmptyCart };
