import React from "react";
import { FlatList } from "react-native";
import { ShoppingCartItem } from "../../../components";

/**
 * Returns a styled component listing movies in the shopping cart
 * @param {Object[]} props.cart - List of all movies currently added to the shopping cart
 * @param {(string) => void} props.onRemoveItem - Event handler for removing the selected movie from the cart
 */
const ShoppingCartList = (props) => {
  const { cart, onRemoveItem } = props;
  const _movieKeyExtractor = (item) => item.id;

  return (
    <FlatList
      data={cart}
      keyExtractor={_movieKeyExtractor}
      renderItem={({ item }) => <ShoppingCartItem movie={item} onRemoveItem={onRemoveItem} />}
    />
  );
};

export { ShoppingCartList };
