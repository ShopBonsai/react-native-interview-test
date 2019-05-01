import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const EmptyCart = () => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.message}>Your cart is currently empty.</Text>
    </View>
  );
};

export { EmptyCart };
