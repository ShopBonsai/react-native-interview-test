import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { LabelledContent, Button } from "../../components";

const MovieDetailsInfo = (props) => {
  const { movie, onPress } = props;
  const { image, title, date, price, genre, inventory } = movie;

  _handleOnPress = () => onPress(movie);

  return (
    <ScrollView style={styles.container}>
      <View>{image !== null && <Image source={{ uri: image }} style={styles.thumbnailImage} />}</View>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text>{genre}</Text>

        <View style={styles.titleSpacer} />

        <LabelledContent label={"Stock Level"} content={`${inventory} Remaining`} />
        <LabelledContent label={"Date"} content={date} />
        <LabelledContent label={"Price"} content={`$${price}`} />
        <LabelledContent label={"Stock Level"} content={`${inventory} Remaining`} />

        <Button onPress={_handleOnPress} title="Add To Cart" styles={styles.checkoutWrapper} />
      </View>
    </ScrollView>
  );
};

export { MovieDetailsInfo };
