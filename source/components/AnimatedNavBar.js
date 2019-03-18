import React from "react";
import {
  Text,
  View,
  Dimensions,
  Animated,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView
} from "react-native";
import AnimatedView from "./AnimatedView";
import colors from "../styles/colors";


const {width} = Dimensions.get("window");
const scrollThrottle=16;
const startHeight = 50;
const endHeight = 100;
const viewStartColor = colors.white;
const viewEndColor = colors.lightBlack;
const titleStartColor = colors.darkGray;
const titleEndColor = colors.white;
const leftButton = 'chevron-left';
const rightButton = 'chevron-right';

const styles = StyleSheet.create({
  container:{
    width: "100%",
    flex: 1,
    backgroundColor: colors.white,
  }
});

export default class AnimatedNavbar extends React.Component {

  state = {
    scrollY: new Animated.Value(0),
  };

  render() {

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView
          style={styles.container}
          scrollEventThrottle={scrollThrottle}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
          >
          {this.props.children}
        </ScrollView>
        <AnimatedView
          name={this.props.name}
          scrollY={this.state.scrollY}
          startHeight={startHeight}
          endHeight={endHeight}
          viewStartColor={viewStartColor}
          viewEndColor = {viewEndColor}
          titleStartColor = {titleStartColor}
          titleEndColor = {titleEndColor}
          leftButton={leftButton}
          rightButton={rightButton}
          onLeftPress={this.props.onLeftPress}
          onRightPress={this.props.onRightPress}
        />
      </KeyboardAvoidingView>
    )
  }
}

