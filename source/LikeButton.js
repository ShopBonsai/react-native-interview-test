import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';


export default class LikeButton extends Component {

  state ={
    toggle:false
  }
  onPress() {
    const newState = !this.state.toggle;
    this.setState({toggle:newState});
    this.props.onStateChange && this.props.onStateChange(newState);
  }
    render(){
      const {toggle} = this.state;
      const buttonBg = toggle?"red":'white';
      const textColor = toggle?"white":'black';
      return(
        <View style={styles.container}> 
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
              onPress = {()=>this.onPress()}
              style = {{margin:10,height:40,borderRadius:10,flex:1,backgroundColor:buttonBg,justifyContent:'center',borderColor:'red',borderWidth:1}}>
              <Text style = {{color:textColor,textAlign:'center',fontSize:16}}>Like!</Text>
            </TouchableOpacity> 
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 22,
    },
  });