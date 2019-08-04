import React from "react"
import { View, Text } from "react-native"
import PropTypes from "prop-types"
import moment from "moment" // could be configurable as well

import Touchable from "../../atoms/touchable/Touchable"
import Cover from "../../atoms/cover/Cover"
import FavoriteTouchable from "../../molecules/favorite-touchable/FavoriteTouchable"

import styles from "./MovieTicket.styles"

const MovieTicket = ({ actions, isFavorited, item: movie }) => {
  const movieTile = `${movie.title} (${moment(movie.date).format("YYYY")})`
  return (
    <Touchable>
      <View style={styles.rootView}>
        <View style={styles.cover}>
          <Cover uri={movie.image} />
        </View>
        <View style={styles.movieInfo}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.movieTitle}>
            {movieTile}
          </Text>
          <Text style={styles.movieGenres}>{movie.genres.join(", ")}</Text>
          <Text style={styles.moviePrice}>{`$ ${movie.price} COP`}</Text>
          <Text style={styles.movieStock}>{`${movie.inventory} tickets left`}</Text>
          <FavoriteTouchable
            onPress={isFavorited ? actions.unsetFavoritedMovie : actions.setFavoritedMovie}
            isFavorite={isFavorited}
          />
        </View>
      </View>
    </Touchable>
  )
}

MovieTicket.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  isFavorited: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    date: PropTypes.string,
    genre: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    image: PropTypes.string,
    inventory: PropTypes.number,
    price: PropTypes.number,
    title: PropTypes.string,
  }),
}

export default MovieTicket
