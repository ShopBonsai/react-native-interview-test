import moment from "moment";
import { apiSettings } from "../settings";
import { stringService } from "./stringService";

const movieService = {
  /**
   * Returns an array of movie listings
   * @param {number} [skip = 0] - Number of movie listings to skip by
   * @param {number} [limit = 10] - Number of how many movie listings to retrieve at a time
   */
  getMovieList(skip = 0, limit = 10) {
    return fetch(apiSettings.getMovieList(skip, limit)).then((response) => response.json());
  },

  /**
   * Returns a parsed array of movie listings after removing movies with incomplete data and converting the URLs
   * @param {string} movies.title
   * @param {string} movies.genre
   * @param {number} movies.price
   * @param {number} movies.inventory
   * @param {string} movies.image
   * @param {string} movies.date
   */
  parseMovieList(movies) {
    return movies
      .filter((movie) => {
        const { title, genre, price, inventory, image, date, _id } = movie;
        if (title && genre && image && date && price >= 0 && inventory >= 0 && _id && _id["$oid"]) {
          return movie;
        }
      })
      .map((movie) => {
        const { date, price, title, genre, inventory, image, _id } = movie;
        const formattedPrice = price.toFixed(2);
        const formattedDate = moment(date).format("YYYY-MM-DD");
        const formattedMovie = {};

        formattedMovie.id = _id["$oid"];
        formattedMovie.title = title;
        formattedMovie.genre = genre;
        formattedMovie.price = formattedPrice;
        formattedMovie.inventory = inventory;
        formattedMovie.image = stringService.convertHttpToHttps(image);
        formattedMovie.date = formattedDate;

        return formattedMovie;
      });
  },

  /**
   * Determines if the movie exists in the cart and returns a boolean value
   * @param {string} movie.id - Id of the movie
   * @param {object[]} cart - List of movies currently in the cart
   * @return  {boolean} - Boolean of the results after checking if the movie is inside the cart
   */
  checkMovieInCart(movie, cart) {
    const { id } = movie;
    return Boolean(cart.find((cartMovie) => cartMovie.id === id));
  },
};

export { movieService };
