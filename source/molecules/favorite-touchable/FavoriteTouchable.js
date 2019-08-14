import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"

import LoveIcon from "../../atoms/love-icon/LoveIcon"
import Touchable from "../../atoms/touchable/Touchable"

import styles from "./FavoriteTouchable.styles"

const FavoriteTouchable = ({ isFavorite, ...touchableProps }) => {
  return (
    <View style={styles.rootView}>
      <Touchable {...touchableProps}>
        <LoveIcon isLoved={isFavorite} />
      </Touchable>
    </View>
  )
}

FavoriteTouchable.propTypes = {
  isFavorite: PropTypes.bool,
  ...Touchable.propTypes,
  children: PropTypes.node,
}

FavoriteTouchable.defaultProps = {
  isFavorite: false,
}

export default FavoriteTouchable
