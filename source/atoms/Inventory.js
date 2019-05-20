/*
 * @providesModule Inventory
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"

import styles from "./Styles/InventoryStyle"

class Inventory extends Component {
  static propTypes = {
    inventory: PropTypes.number,
  }
  render() {
    const { inventory } = this.props
    return <Text style={styles.inventory}>{`Remaining seats : ${inventory}`}</Text>
  }
}

export default Inventory
