import React, { Component } from "react";
import { Text, View } from "react-native";
import Feed from './Feed';
import ButtonContainer from "./ButtonContainer";
import Button from "./Button";
import styles from "./styles";

export default class Main extends Component {
  constructor() {
    super();
    this.baseUrl = 'https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/movieTickets?';
    this.pageLength = 5;

    // Loading starts as true as the app will be in a state of loading until the first fetch
    // call completes successfully.

    // The purpose of allData is a store of allData fetched, so when cycling through pages
    // if data is already obtained for that page, then we don't need to fetch it again.

    // The purpose of data is what is to be shown on the currentPage.

    // currentPage is zero indexed

    this.state = {
      currentPage: 0,
      loading: true,
      data: [],
      allData: [],
    };

    // These functions need 'this' binding so the function calls use the correct reference of this
    // as they're attached to components
    this.likeMovie = this.likeMovie.bind(this);
    this.fetchPrevPage = this.fetchPrevPage.bind(this);
    this.fetchNextPage = this.fetchNextPage.bind(this);
  }

  // Function to make the request for the data and return a promise resolving with JSON
  fetchData(start) {
    return fetch(`${this.baseUrl}skip=${start}&limit=${this.pageLength}`)
      .then(response => response.json())
      .catch(error => console.log(error)) //to catch the errors if any
  }

  // On first page fetch, get data from API from 0 to 10
  // and set both data and allData with the JSON
  fetchFirstPage() {
    this.fetchData(0).then(responseJson => {
      this.setState({
        loading: false,
        data: responseJson,
        allData: responseJson,
      });
    });
  }

  fetchNextPage() {
    // First change the state to loading whilst the next page is 
    // assembled or fetched
    this.setState({
      loading: true,
    });

    const currentPage = this.state.currentPage;
    const nextPage = currentPage + 1;
    const curAllData = Array.from(this.state.allData);

    // if allData already contains the next page (if we've gone back a page and then forward again)
    // the length of allData will be greater than or equal to the length of the page after,
    // and if so, we don't need a new fetch, we already have the data, we just need to slice it from allData
    if (curAllData.length >= (nextPage + 1) * this.pageLength) {
      // The slice is as follows, if we're currently on 2nd page, currentPage is 1, and nextPage is 2.
      // So if we want the elements of the 3rd page, we want elements 20 - 29 from the array
      // so nextPage * pageLength = 20
      // and (nextPage + 1) * pageLength = 30
      // thus we slice from 20 to 30 (not inclusive of 30)!
      const newData = curAllData.slice(nextPage * this.pageLength, (nextPage + 1) * this.pageLength);
      this.setState({
        currentPage: nextPage,
        loading: false,
        data: newData,
      });
      return;
    }

    // otherwise, fetch the nextPage of data
    this.fetchData(nextPage * this.pageLength).then(responseJson => {
      this.setState({
        currentPage: nextPage,
        loading: false,
        data: responseJson,
        allData: [...curAllData, ...responseJson],
      });
    })
  }

  fetchPrevPage() {
    // First change the state to loading whilst the next page is assembled
    this.setState({
      loading: true,
    });

    const currentPage = this.state.currentPage;
    const curAllData = Array.from(this.state.allData);
    const prevPage = currentPage - 1;

    // When going back a page we always know we already have that data,
    // so we just need to slice it from allData.
    // The slice is as follows, if we're currently on 3rd page, currentPage is 2, and prevPage is 1.
    // So if we want the elements of the 2nd page, we want elements 10 - 19 from the array
    // so prevPage * pageLength = 10
    // and currentPage * pageLength = 20
    // thus we slice from 10 to 20 (not inclusive of 20)!
    const newData = curAllData.slice(prevPage * this.pageLength, currentPage * this.pageLength);

    this.setState({
      loading: false,
      currentPage: prevPage,
      data: newData,
    });
  }

  likeMovie(movieId) {
    // To enable likes to persist across pages, they have to be added to the actual data store
    let data = Array.from(this.state.data);
    let index = data.findIndex(movie => movie._id.$oid === movieId);
    if (index > -1) {
      data[index].liked = !data[index].liked;
      this.setState({
        data,
      });
    }
  }

  componentDidMount() {
    this.fetchFirstPage();
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Movie Ticket Feed</Text>
        <Feed data={this.state.data} loading={this.state.loading} likeMovie={this.likeMovie} />
        <ButtonContainer>
          {/* Only show Prev Page button if we're ahead of 1st page */}
          {this.state.currentPage > 0 && <Button onPress={this.fetchPrevPage} text={'Prev Page'} />}
          <Button onPress={this.fetchNextPage} text={'Next Page'} />
        </ButtonContainer>
      </View>
    )
  }
}
