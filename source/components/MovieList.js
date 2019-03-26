import React, { Component } from "react";
import { 
    FlatList, 
    View,
    TouchableOpacity,
    Text
} from "react-native";

export default class MovieList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allMovies: {},
            loading: true
        }
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
        return (
            <TouchableOpacity>
                <Text>
                    { item == null ? "No Title" : item.item.title }
                </Text>
                <Text>
                    { item == null ? "No Genre" : item.item.genre }
                </Text>
            </TouchableOpacity>
        )
    }

    render() {
        return(
            <View>
                <FlatList
                    data={this.state.allMovies}
                    renderItem={this.renderItem}
                    keyExtractor={item => item._id.$oid}
                    numColumns={3}
                />
            </View>
        );
    }
}