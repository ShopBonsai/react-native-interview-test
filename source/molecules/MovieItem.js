import React, { Component } from "react"
import PropTypes from "prop-types"
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, Image } from "react-native"

import { CardSection } from "../atoms"

const moreStyles = {
  containerStyle: {
    margin: 2,
  },
  topViewStyle: {
    flexDirection: "row",
  },
  moviePosterStyle: {
    height: 80,
    width: 80,
    margin: 4,
  },
  titleStyle: {
    fontSize: 16,
    color: "black",
  },
  plotStyle: {
    marginLeft: 4,
  },
  detailedTextStyle: {
    color: "brown",
    fontSize: 14,
  },
  yearStyle: {
    marginTop: 2,
    marginLeft: 8,
  },
  topLineStyle: {
    flexDirection: "row",
  },
  imageRightStuff: {
    flexDirection: "column",
    marginLeft: 8,
    flex: 1,
  },
  detailedRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  detailedValueStyle: {
    marginLeft: 5,
  },
}

class MovieItem extends Component {
  UNSAFE_componentWillUpdate() {
    LayoutAnimation.spring()
  }

  render() {
    const {
      containerStyle,
      detailedRow,
      detailedTextStyle,
      detailedValueStyle,
      imageRightStuff,
      moviePosterStyle,
      titleStyle,
      topLineStyle,
      topViewStyle,
    } = moreStyles
    const { date, genre, id, image, inventory, title } = this.props.movie
    const onMovieSelect = () => {
      this.props.movieSelect(id)
    }
    return (
      <TouchableWithoutFeedback onPress={onMovieSelect}>
        <View style={containerStyle}>
          <CardSection>
            <View style={topViewStyle}>
              <Image style={moviePosterStyle} source={image} />
              <View style={imageRightStuff}>
                <View style={topLineStyle}>
                  <Text style={titleStyle}>{title}</Text>
                </View>
                <View style={detailedRow}>
                  <Text style={detailedTextStyle}>Show Time -> </Text>
                  <Text style={detailedValueStyle}>{date}</Text>
                </View>
                <View style={detailedRow}>
                  <Text style={detailedTextStyle}>Genre -></Text>
                  <Text style={detailedValueStyle}>{genre.slice(0, 3).join(", ")}</Text>
                </View>
                <View style={detailedRow}>
                  <Text style={detailedTextStyle}>Tickets Left -> </Text>
                  <Text style={detailedValueStyle}>{inventory}</Text>
                </View>
              </View>
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
MovieItem.propTypes = {
  movie: PropTypes.object,
  movieSelect: PropTypes.func,
}
export default MovieItem
