import React, { Component } from "react";
import { View, Text, Image, Button, TouchableHighlight, ScrollView } from "react-native";
import { movieDetailsStyle, bonsai_colour, movieItemStyle } from "../styles";
import moment from 'moment';

/**
 * @class MovieDetails
 * Displays additional information for a selected movie from MovieList.js
 * @props item - movie passed to component
 */
export default class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.buyItem = () => {

        }
    }

    /**
     * Renders Movie Details in ScrollView
     * @style - uses movieDetailsStyle from styles.js
     */
    render() {
        // Take item from prop
        const { item } = this.props;

        // Convert date from data to useable format using Moment.js
        const dateTime = moment(item.item.date, "YYYY-MM-DD'T'hh:mm:ss'Z'")
        dateTime.locale(); // set locale to en

        // dateView if not null
        const dateView = item.item.date == null ?
        (<View></View>) :
        (<View style={movieDetailsStyle.dateView}>
            <Text style={movieDetailsStyle.dayAndDate}>
                {dateTime.format("ddd")}, {dateTime.format("MMM")} {dateTime.format("DD")}
            </Text>
            <Text style={movieDetailsStyle.time}>
                {dateTime.format("LT")}
            </Text>
            <Text style={movieDetailsStyle.year}>
                {dateTime.format("YYYY")}
            </Text>
        </View>)

        // Create Image if image exists in movie data
        const imageView = item.item.image == null ?
            (<View>
                </View>) :
            (<Image
                style= {movieDetailsStyle.image}
                source={{uri: item.item.image }}
                key={item.item.image}
            />)

        // Buy button if price is not null
        const buyButton = item.item.price === null ?
            (<View></View>) :
            (<Button
                onPress={this.buyItem}
                title={"$" + item.item.price.toFixed(2) + " BUY"}
                buttonStyle={movieDetailsStyle.buttonStyle}
                color={bonsai_colour.blue}
                accessibilityLabel="Button to buy this movie"
            />)
        
        // Inventory View if inventory is not null
        const inventory = item.item.inventory == null ?
        (<View></View>) : (
            <Text style={movieDetailsStyle.inventory}>
                        Left: {item.item.inventory}
                    </Text>
        )

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
                <View style={movieDetailsStyle.buyView}>
                    {buyButton}
                    {inventory}
                </View>
                {dateView}
            </ScrollView>
        )
    }
}