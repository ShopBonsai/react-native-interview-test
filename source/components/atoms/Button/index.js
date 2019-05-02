import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles as buttonStyles } from "./styles";

/**
 * Returns a custom styled Button component
 * @param {() => void} props.onPress - Event handler to trigger
 * @param {string} [props.color = "#fff"] - Color that that button text should be set to
 * @param {string} [props.backgroundColor = "#000"] - Background color that the button text should be set to
 * @param {string} [props.title = ""] - Title of the button
 * @param {object} [props.styles = ""] - Extra styles to be applied to the button
 */
const Button = (props) => {
  const { onPress, color = "#fff", backgroundColor = "#000", title = "", styles = {} } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            backgroundColor: `${backgroundColor}`,
          },
          styles,
        ]}>
        <Text
          style={[
            {
              color: `${color}`,
            },
            buttonStyles.buttonText,
          ]}>
          {title.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export { Button };
