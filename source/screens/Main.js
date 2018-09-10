import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import MoviesData from '../MoviesData';

export default class Main extends Component {
    render(){
      return(
        <ScrollView> 
          <MoviesData />
        </ScrollView>
      );  
    }
  }