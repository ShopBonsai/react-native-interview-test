/*
 * @providesModule Price
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"

import styles from "./Styles/PriceStyle"

class Price extends Component {
  static propTypes = {
    price: PropTypes.number,
  }

  render() {
    const { price } = this.props
    return <Text style={styles.ticketPrice}>{`${price}$`}</Text>
  }
}

export default Price
