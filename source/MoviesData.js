import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator, Text, Image, StyleSheet, } from 'react-native';
import LikeButton from './LikeButton';


export default class MoviesData extends Component {
  
    constructor(props){
      super(props);
      this.state ={ isLoading: true,
                    dataSource: {},
                    value: ''
                  };   
      this._onStateChange = this._onStateChange.bind(this)
    }

    _onStateChange(newState){
      const value = newState?'You bookmarked this film':''
      this.setState({toggleCount:value})
    }

    componentDidMount(){
      return fetch('https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/movieTickets')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log (responseJson)
  
          this.setState({
            isLoading: false,
            dataSource: responseJson
          }, function(){
          });
  
        })
        .catch((error) => {
          console.error(error);
        });
    }
  
    render(){
   
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
      )
      } 

      const {toggleCount} = this.state;

      return(
        <View style={{paddingTop:20}}>
        <Text> {toggleCount} </Text>
          <FlatList 
            data ={this.state.dataSource}

            renderItem={({item}) => 
            <View >

            <View style={styles.imageContainer}>
            <Image 
            style={styles.image}
            source = {{uri: item.image}} 
            key={item.uri}
            /> 
            </View>
            
            
            <Text style = {styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style = {styles.genre} numberOfLines={1}>{item.genre}</Text>
            <LikeButton onStateChange = {this._onStateChange}/>
           
            </View>
            }
            keyExtractor={item => item._id.$oid}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    image: {
      marginLeft: 30,
      marginBottom: 30,
      borderRadius: 10,
      width: 150,
      height: 200,                  
    },
    title: {
      marginLeft: 30,
      marginTop: 5,
      fontSize: 14,
    },
    genre: {
      marginLeft: 30,
      marginTop: 5,
      fontSize: 12,
      color:'grey', 
    },
    
  });