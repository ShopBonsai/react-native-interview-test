import React, { Component } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity, Text, Image, Dimensions, View, Button } from "react-native";
import { movieItemStyle, flatListStyle, bonsai_colour, bottomStyle } from "../styles";
import { MOVIEDETAILS } from '../screens';

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

        // Skip and Limit vars
        this.skip = 0;
        this.limit = 10;

        // next and previous closures
        this.getPrevious = () => {
            this.skip = this.skip <= 0 ? 0 : this.skip - 10;
            this.getData();
        }
        this.getNext = () => {
            this.skip += 10;
            this.getData();
            if (this.state.allMovies == null) {
                this.skip -= 10;
                this.getData();
            }
        }
    }

    /**
     * Calls Bonsai API using Fetch and parses information, storing into @state allMovies
     */
    getData() {
        fetch("https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/movieTickets?skip=" + this.skip + "&limit=" + this.limit)
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
        
        const goToMovieDetails = () => {
            this.props.navigator.push({   
                screen: MOVIEDETAILS,
                title: item.item.title,
                navigatorStyle: {
                    navBarHidden: false,
                    navBarBackgroundColor: bonsai_colour.blue,
                    navBarTextColor: '#FFFFFF',
                    navBarTranslucent: true,
                    largeTitle: true
                },
                passProps: {
                    item: item
                }
            })
        }
        
        // Return rendering for given item
        return (
            <TouchableOpacity style={movieItemStyle.container} onPress={goToMovieDetails}>
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
                    <View style={bottomStyle.view}>
                        <View style={bottomStyle.prevButton}>
                            <Button
                            onPress={this.getPrevious}
                            title="< Previous"
                            accessibilityLabel=""
                            />
                        </View>
                        <View style={bottomStyle.nextButton}>
                            <Button
                            onPress={this.getNext}
                            title="Next >"
                            accessibilityLabel=""
                            />
                        </View>
                    </View>
                </View>
            )
        }
    }
}