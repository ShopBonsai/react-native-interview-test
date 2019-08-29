import moment from "moment"

import defaultImg from "../images/default.jpg"

function movieNormalizer(movie) {
  return {
    ...movie,
    id: movie._id.$oid,
    genre: (movie.genre || "").split("|"),
    image: movie.image ? { uri: movie.image } : defaultImg,
    date: moment(movie.date).format("HH:mm DD-MM-YYYY"),
  }
}
export default function moviesNormalizer(movies = []) {
  return movies.map(movieNormalizer)
}
