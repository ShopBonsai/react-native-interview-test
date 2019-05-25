import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ButtonConainer from './ButtonContainer';
import styles from './styles';
import Button from './Button';

export default class MovieRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      liked: false,
    };
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails() {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  }

  render() {
    const {
      movie,
      likeMovie,
    } = this.props;

    return (
      <View>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        {movie.liked && <Text style={styles.centerText}>Liked!</Text>}

        <ButtonConainer>
          <Button onPress={() => likeMovie(movie._id.$oid)} text={movie.liked ? 'Unlike' : 'Like'}/>
          <Button onPress={this.toggleDetails} text={'View Details'}/>
        </ButtonConainer>

        <View className='details' style={[styles.movieRowDetails, this.state.showDetails && styles.movieRowDetailsShown]}>
          <Text>Tickets available: {movie.inventory}</Text>
          <Text>Ticket price: ${movie.price}</Text>
        </View>
      </View>
    )
  }
}