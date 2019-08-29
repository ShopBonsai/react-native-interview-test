import moment from "moment"

import defaultImg from "../images/default.jpg"
/**
 * Normalize the single movie data.
 *
 * @param {Object} movie - Movie data.
 * @returns {Object} Normalized movie data.
 */
function movieNormalizer(movie) {
  return {
    ...movie,
    id: movie._id.$oid,
    genre: (movie.genre || "").split("|"),
    image: movie.image ? { uri: movie.image } : defaultImg,
    date: moment(movie.date).format("HH:mm DD-MM-YYYY"),
  }
}
/**
 * Normalize the movies data to store and parse.
 *
 * @param {Array} movies - Movies data array.
 * @returns {Array} Array of normalized movies data.
 */
export default function moviesNormalizer(movies = []) {
  return movies.map(movieNormalizer)
}
