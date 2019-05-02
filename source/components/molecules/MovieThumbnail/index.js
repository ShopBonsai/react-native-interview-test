import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import moment from "moment";
import { styles } from "./styles";

/**
 * Returns a styled component which displays a thumbnail description of the movie
 * @param {Object} props.movie - Object of movie item
 * @param {(Object) => void)} props.onPress - Event handler for navigating to the selected movie's details page
 */
const MovieThumbnail = (props) => {
  const { movie, onPress } = props;
  const { image, title, date, price } = movie;

  const _handleOnPress = () => onPress(movie);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={_handleOnPress}>
        <View>
          <View style={{ height: 200 }}>
            {image !== null && <Image source={{ uri: image }} style={styles.thumbnailImage} />}
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.infoWrapper}>
              <Text>{date}</Text>
              <Text style={styles.price}>{`$${price.toFixed(2)}`}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export { MovieThumbnail };
