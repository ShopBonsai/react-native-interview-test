import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import moment from "moment";
import { styles } from "./styles";

const MovieThumbnail = (props) => {
  const { movie, onPress } = props;
  const { image, title, date, price } = movie;

  const parsedDate = moment(date).format("YYYY-MM-DD");

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <View style={{ height: 200 }}>
            {image !== null && <Image source={{ uri: image }} style={styles.thumbnailImage} />}
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.infoWrapper}>
              <Text>{parsedDate}</Text>
              <Text>{`$${price}`}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export { MovieThumbnail };
