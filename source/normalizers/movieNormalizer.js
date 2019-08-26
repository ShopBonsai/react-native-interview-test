import moment from "moment"

function movieNormalizer(movie) {
  return {
    ...movie,
    id: movie._id.$oid,
    genre: movie.genre.split("|"),
    date: moment(movie.date).format("HH:mm DD-MM-YYYY"),
  }
}
export default function moviesNormalizer(movies) {
  return movies.map(movieNormalizer)
}
