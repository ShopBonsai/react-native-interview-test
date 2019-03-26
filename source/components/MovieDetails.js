import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { movieDetailsStyle, bonsai_colour } from "../styles";
import { MOVIEDETAILS } from '../screens';

/**
 * @class MovieDetails
 * Displays additional information for a selected movie from MovieList.js
 * @props item - movie passed to component
 */
export default class MovieDetails extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * Renders Movie Details in ScrollView
     * @style - uses movieDetailsStyle from styles.js
     */
    render() {
        // Take item from prop
        const { item } = this.props;

        // Create Image if image exists in movie data
        const imageView = item.item.image == null ?
            (<View>
                </View>) :
            (<Image
                style= {movieDetailsStyle.image}
                source={{uri: item.item.image }}
                key={item.item.image}
            />)

        // Title if not null
        const title = item.item.title == null ?
        (<View></View>) : (
            <Text style={movieDetailsStyle.title}>
                { item.item.title }
            </Text>
        )

        // Genre if Not null
        const genre = item.item.genre == null ?
        (<View></View>) : (
            <Text style={movieDetailsStyle.genre}>
                { item.item.genre }
            </Text>
        )
        
        // Return View
        return (
            <ScrollView contentContainerStyle={movieDetailsStyle.view}>
                <View style={movieDetailsStyle.topView}>
                    {imageView}
                    {title}
                    {genre}
                </View>
            </ScrollView>
        )
    }
}