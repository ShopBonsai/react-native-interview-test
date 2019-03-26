import React, { Component } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity, Text, Image, View } from "react-native";
import { movieItemStyle, flatListStyle, bonsai_colour } from "../styles";

/**
 * @class MovieList
 * Displays Movies in a FlatList to be selected by the user
 * @state - allMovies: movie data downloaded using Fetch API
 * @state - loading: if movie is currently being downloaded
 */
export default class MovieList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            allMovies: {},
            loading: true
        }
        // Bind renderItem method to be used in TouchableOpacity
        this.renderItem = this.renderItem.bind(this);
        this.getData = this.getData.bind(this);
    }

    /**
     * Calls Bonsai API using Fetch and parses information, storing into @state allMovies
     */
    getData() {
        fetch("https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/movieTickets")
        .then(response => response.json())
        .then(movies => this.setState({allMovies: movies, loading: false}))
        .catch(error => {
            console.error(error)
        })
    }

    componentDidMount() {
        // Get data by calling method
        this.getData();
    }

    /**
     * Rendered for given item in FlatList
     * @param {item from list to be rendered} item 
     */
    renderItem(item) {
        // Image to be rendered if exists
        const imageView = item.item.image == null ?
            (<View style={movieItemStyle.noImage}>
            <Text style={movieItemStyle.noImageText}>No Image</Text>
            </View>) :
            (<Image
                style= {movieItemStyle.image}
                source={{uri: item.item.image }}
                key={item.item.image}
            />)
        
        // Return rendering for given item
        return (
            <TouchableOpacity style={movieItemStyle.container}>
                <View style={movieItemStyle.imageContainer}>
                    {imageView}
                </View>
                <Text style={movieItemStyle.title}>
                { item == null ? "No Title" : item.item.title }
                </Text>
                <Text style={movieItemStyle.genre}>
                { item == null ? "No Genre" : item.item.genre }
                </Text>
            </TouchableOpacity>
        )
    }

    // Render List if not loading, else display an activity indicator
    render() {
        if (this.state.loading) {
            return <ActivityIndicator size="large" />
        } else {
            return (
                <View style={flatListStyle.flatList}>
                    <FlatList
                        data={this.state.allMovies}
                        renderItem={this.renderItem}
                        keyExtractor={item => item._id.$oid}
                        numColumns={3}
                    />
                </View>
            )
        }
    }
}