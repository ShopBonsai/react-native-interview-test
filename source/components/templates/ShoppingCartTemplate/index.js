import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const ShoppingCartTemplate = (props) => <View style={styles.contentWrapper}>{props.children}</View>;

export { ShoppingCartTemplate };
