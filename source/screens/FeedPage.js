import React, { Component } from "react"

import {
  StyleSheet,
  View,
  Text,
  Platform,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ImageBackground,
} from "react-native"

const images = {
  expand: require("../images/down.png"),
}

// styles for cotainers used

const styles = StyleSheet.create({
  description: {
    marginLeft: 10,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  image: {
    flex: 1,
    width: 20,
    height: 20,
    alignSelf: "flex-end",
  },
  imageViewContainer: {
    width: "80%",
    height: 50,
    margin: 10,
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    margin: 5,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },
  red: {
    color: "#ff0000",
  },
  footerStyle: {
    padding: 7,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    borderTopColor: "#009688",
  },
  TouchableOpacitystyle: {
    padding: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F44336",
    borderRadius: 5,
  },
  touchableOpacityText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
  },

  flatListItems: {
    fontSize: 20,
    color: "#000",
    padding: 10,
  },
})

export default class FeedPage extends Component {
  // declare constructor variables that are used throughout the file
  constructor() {
    super()
    this.state = {
      isLoading: true,
      jsonFromServer: [],
      fetchingStatus: false,
      isSelected: [],
    }
    this.skip = 0
  }

  // fetching data as first thing
  componentDidMount() {
    fetch("https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/movieTickets?limit=10")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          jsonFromServer: [...this.state.jsonFromServer, ...responseJson],
          isLoading: false,
        })
      })
  }
  // fetch additional data from api
  fetchMoreDataFromServer = () => {
    this.skip = this.skip + 10
    this.setState({ fetchingStatus: true }, () => {
      fetch(
        `https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/movieTickets?skip=${
          this.skip
        }&limit=10`,
      )
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            jsonFromServer: [...this.state.jsonFromServer, ...responseJson],
            fetchingStatus: false,
          })
        })
    })
  }

  // expansion details and state design
  // for all the item clicked, save it to a list and expands them when clicked, when, unselected, reverse the process and unselect them
  onPress = oid => () => {
    const newIsSelected = this.state.isSelected.includes(oid)
      ? this.state.isSelected.filter(foid => foid !== oid)
      : [...this.state.isSelected, oid]
    this.setState({ isSelected: newIsSelected })
  }

  // separating items in a list
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    )
  }

  // footer function for loading more data
  renderFooter = () => {
    return (
      <View style={styles.footerStyle}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.TouchableOpacitystyle}
          onPress={this.fetchMoreDataFromServer}
        >
          <Text style={styles.touchableOpacityText}>Load More Data From API</Text>
          {this.state.fetchingStatus ? (
            <ActivityIndicator color="#fff" style={{ marginLeft: 6 }} />
          ) : null}
        </TouchableOpacity>
      </View>
    )
  }

  renderKeyItem = item => item._id.$oid

  renderItem = ({ index, item }) => {
    const { isSelected } = this.state
    const {
      _id: { $oid },
      date,
      genre,
      image,
      title,
    } = item
    if (!title || !$oid) return null
    return (
      <TouchableOpacity onPress={this.onPress($oid)}>
        <ImageBackground source={images.expand} style={styles.image} />
        <Text style={styles.flatListItems}>
          {index} {"."} {"Title: "} {item.title}
        </Text>
        {isSelected.includes($oid) && (
          <View>
            <Text style={styles.description}>
              {"Genre: "} {genre.split("|").join(", ")} {"\n"}
              {"Price: $"} {item.price.toString().substring(0, 5)} {"\n"}
              {"Inventory: "} {item.inventory} {"\n"}
              {"Date: "} {date.substring(0, 10)} {"\n"}
              {"Time: "} {date.substring(11, 19)} {"\n"}
              {"Abbreviated Key : "} {item._id.$oid.substring(21, 24)}
            </Text>
            <Image
              style={styles.imageViewContainer}
              source={{ uri: image.replace("http", "https") }}
            />
          </View>
        )}
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        {this.state.isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            style={{ width: "100%" }}
            keyExtractor={this.renderKeyItem}
            data={this.state.jsonFromServer}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={this.renderItem}
            ListFooterComponent={this.renderFooter}
          />
        )}
      </View>
    )
  }
}
