import React, { Component } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import MovieRow from './MovieRow';
import styles from './styles';

export default class Feed extends Component {
  constructor(props) {
    super(props);
  }

  FlatListItemSeparator() {
    return (
      <View style={styles.spacedLine} />
    );
  }

  renderItem = ({ item }) => {
    // Some movies contain null data, so don't render them
    if (!item.title) {
      return;
    }
    return (
      <MovieRow movie={item} likeMovie={this.props.likeMovie} />
    )
  }

  render() {
    const {
      loading,
      data,
    } = this.props;

    if (loading) {
      return (
        <View>
          <Text style={styles.centerText}>LOADING THE FEED</Text>
          <ActivityIndicator
            color='blue'
            size='large'
            style={styles.activityIndicator}
          />
        </View>
      )
    }

    return (
      <View style={styles.flatListContainer}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          keyExtractor={item => item._id.$oid}
        />
      </View>
    )
  }
}


