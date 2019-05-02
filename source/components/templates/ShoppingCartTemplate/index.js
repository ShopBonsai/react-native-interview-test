import React from "react";
import { View } from "react-native";
import { ShoppingCartList, Subtotal } from "../../../components";
import { styles } from "./styles";

/**
 * Returns a styled wrapper to be used for the Shopping Cart
 * @param {Object[]} props.cart - List of all movies currently added to the shopping cart
 * @param {(string) => void} props.onRemoveItem - Event handler for removing the selected movie from the cart
 * @param {number} props.subtotal - Total price of movies added up prior to tax
 */
const ShoppingCartTemplate = (props) => {
  const { cart, onRemoveItem, subtotal } = props;
  const shoppingCartListProps = {
    cart,
    onRemoveItem,
  };

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.shoppingCartListWrapper}>
        <ShoppingCartList {...shoppingCartListProps} />
      </View>
      <Subtotal subtotal={subtotal} />
    </View>
  );
};

export { ShoppingCartTemplate };
