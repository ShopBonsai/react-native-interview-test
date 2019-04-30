import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

/**
 * Returns a styled labelled content
 * @param {string} [props.label = ""] - Label to be displayed
 * @param {string} [props.content = ""] - Content to be displayed
 */
const LabelledContent = (props) => {
  const { label = "", content = "" } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export { LabelledContent };
