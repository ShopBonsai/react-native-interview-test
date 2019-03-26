import { StyleSheet, Dimensions } from "react-native";

// Get height and width of the current window
const { height, width } = Dimensions.get("window")

// number of rows and col in FlatList
const row = 3
const col = 3

/**
 * Bonsai Colours
 */
export const bonsai_colour = {
    purple: 'rgb(43,42,57)',
    blue: 'rgb(1,104,254)'
}

/**
 * Style for each movie item in FlatList
 * Used in MovieItem.js
 */
export const movieItemStyle = StyleSheet.create({
    container: {
        marginTop: 8,
        marginLeft: 8,
        marginBottom: 8,
        height: (height - 20 - 20) / row - 10,
        width: (width - 10) / col - 10
    },
    imageContainer: {
        flex: 1
    },
    image: {
        borderRadius: 10,
        ...StyleSheet.absoluteFillObject
    },
    title: {
        color: "#000000",
        fontSize: 15,
        marginTop: 5
    },
    genre: {
        color: "#BBBBBB",
        fontSize: 12
    },
    noImage: {
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'center',
        ...StyleSheet.absoluteFillObject
    },
    noImageText: {
        fontSize: 20,
        color: "#000000",
    }
})

/**
 * Style for FlatList
 * Used in MovieList.js
 */
export const flatListStyle = StyleSheet.create({
    flatList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF'
    }
})