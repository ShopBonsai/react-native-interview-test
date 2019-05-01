import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const SubTotal = (props) => {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.subTotalLabel}>SUBTOTAL:</Text>
      <Text style={styles.subTotal}>$200.00</Text>
    </View>
  );
};

export { SubTotal };
