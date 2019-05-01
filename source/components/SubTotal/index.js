import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const Subtotal = (props) => {
  const { subtotal } = props;

  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.subTotalLabel}>SUBTOTAL:</Text>
      <Text style={styles.subtotal}>{`$${subtotal.toFixed(2)}`}</Text>
    </View>
  );
};

export { Subtotal };
