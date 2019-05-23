import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

export default class ButtonContainer extends Component {
  render() {
    return (
      <View className='buttonContainer' style={styles.buttonContainer}>
        {this.props.children}
      </View>
    )
  }
}
