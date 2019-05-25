import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onPress,
      text,
    } = this.props;
  
    return (
      <TouchableOpacity onPress={onPress}><View style={styles.button}><Text>{text}</Text></View></TouchableOpacity>
    )
  }
}
