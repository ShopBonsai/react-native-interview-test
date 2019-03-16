import React from 'react'

import {
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView
} from 'react-native'

const HEADER_MAX_HEIGHT = 150;
const HEADER_MIN_HEIGHT = 65;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const START_HEIGHT = 50;
const END_HEIGHT = 100;

const {height, width} = Dimensions.get('window');


export default class AnimatedNavbar extends React.Component {

  state = {
    scrollY: new Animated.Value(0),
  };

  render() {

    const headerOpacity = this.state.scrollY.interpolate({
      inputRange: [START_HEIGHT, END_HEIGHT],
      outputRange: ['transparent', '#FFFFFF'],
      extrapolate: 'clamp',
    });

    const headerColor = this.state.scrollY.interpolate({
      inputRange: [START_HEIGHT, END_HEIGHT],
      outputRange: ['#000000', '#4B4B4B'],
      extrapolate: 'clamp',
    });

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView
          style={styles.container}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
          >
          {this.props.children}
        </ScrollView>
        <Animated.View style={[styles.header, {height: 65, backgroundColor: headerOpacity}]}>
          <View style={styles.row}>
            <TouchableOpacity onPress={this.props.onLeftPress()}>
              <Image style={styles.arrow} source={require('../../assets/images/left.png')} />
            </TouchableOpacity>
            <Animated.Text style={[styles.title, {color: headerColor}]}>
              {this.props.name}
            </Animated.Text>
            <TouchableOpacity onPress={this.props.onRightPress()}>
              <Image style={styles.arrow} source={require('../../assets/images/right.png')} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
    line:{
      height: 1,
      backgroundColor: '#F5F5F5',
      width: width,
    },
    arrow:{
      width:10,
      height:16,
    },
    container:{
      width: '100%',
      flex: 1,
      backgroundColor: '#FFF',
    },
    header:{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      overflow: 'hidden',
      backgroundColor: '#FFFFFF',
    },
    row:{
      width: width,
      height: 65,
      paddingHorizontal: 18,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title:{
      fontFamily: 'Arial',
      fontSize: 20,
      fontWeight: 'bold',
    },
});

