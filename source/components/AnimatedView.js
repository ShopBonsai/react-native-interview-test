import React from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import fontStyles from "../styles/fonts";
import colors from "../styles/colors";
import commonStyles from "../styles/commonStyles";
import FontAwesome, { Icons } from "react-native-fontawesome";

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
  header:{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    backgroundColor: colors.white,
  },
  row:{
    width: width,
    height: 65,
    paddingHorizontal: 18,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default class AnimatedView extends React.Component {

  render() {

    const startHeight = this.props.startHeight;
    const endHeight = this.props.endHeight;
    const viewStartColor = this.props.viewStartColor;
    const viewEndColor = this.props.viewEndColor;
    const titleStartColor = this.props.titleStartColor;
    const titleEndColor = this.props.titleEndColor;

     const viewOpacity = this.props.scrollY.interpolate({
      inputRange: [startHeight, endHeight],
      outputRange: [viewStartColor, viewEndColor],
      extrapolate: "clamp",
    });

    const titleColor = this.props.scrollY.interpolate({
      inputRange: [startHeight, endHeight],
      outputRange: [titleStartColor, titleEndColor],
      extrapolate: "clamp",
    });

    return (
      <Animated.View style={[styles.header, {height: 65, backgroundColor: viewOpacity}]}>
        <View style={styles.row}>
          <TouchableOpacity onPress={this.props.onLeftPress()}>
            {/*<FontAwesome>{Icons.chevronLeft}</FontAwesome>*/}
            <Image style={commonStyles.icon} source={this.props.leftButton} />
          </TouchableOpacity>
          <Animated.Text style={[fontStyles.navTitle, {color: titleColor}]}>
            {this.props.name}
          </Animated.Text>
          <TouchableOpacity onPress={this.props.onRightPress()}>
            <Image style={commonStyles.icon} source={this.props.rightButton} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    )
  }
}

