import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centerText: {
        textAlign: 'center',
    },
    flatListContainer: {
        width: '100%',
        height: '85%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#e8e9ea',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 10,
    },
    movieTitle: {
        textAlign: 'center',
        fontSize: 20,
    },
    spacedLine: {
        marginTop: 1,
        marginBottom: 1,
        height: 0.5,
        width: '100%',
        backgroundColor: '#000',
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        margin: 30,
    },
    movieRowDetails: {
        paddingLeft: 10,
        height: 0,
        overflow: 'hidden',
    },
    movieRowDetailsShown: {
        height: 50,
    },
    buttonContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
    },
    button: {
        borderRadius: 5,
        flex: 1,
        padding: 15,
        alignSelf: 'center',
        margin: 10,
        backgroundColor: '#cbe6e6',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;