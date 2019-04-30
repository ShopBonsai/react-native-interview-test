import moment from "moment";
import { apiSettings } from "../settings";
import { stringService } from "./stringService";

const movieService = {
  /**
   * Returns an array of movie listings
   * @param {number} skip - Number of movie listings to skip by
   * @param {number} limit - Number of how many movie listings to retrieve at a time
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
        const { title, genre, price, inventory, image, date } = movie;
        if (title && genre && image && date && price >= 0 && inventory >= 0) {
          return movie;
        }
      })
      .map((movie) => {
        const { date, price } = movie;
        const formattedDate = moment(date).format("YYYY-MM-DD");

        return {
          ...movie,
          image: stringService.convertHttpToHttps(movie.image),
          date: formattedDate,
          price: `$${price.toFixed(2)}`,
        };
      });
  },
};

export { movieService };
