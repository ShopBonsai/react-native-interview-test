import React from "react"
import { View, Text } from "react-native"
import PropTypes from "prop-types"

import Touchable from "../../atoms/touchable/Touchable"

const MovieTicket = ({ item: movie }) => {
  return (
    <Touchable>
      <View>
        <Text>{JSON.stringify(movie)}</Text>
      </View>
    </Touchable>
  )
}

MovieTicket.propTypes = {
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
