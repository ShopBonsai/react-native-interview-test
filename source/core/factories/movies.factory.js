export default (movie) => {
  const { _id, genre: movieGenre, ...rest } = movie
  return {
    id: _id.$oid,
    genre: movieGenre ? movieGenre.split("|") : [],
    ...rest,
  }
}
