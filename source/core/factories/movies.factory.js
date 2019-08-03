/**
 * Data mapping for the movies.
 *
 * @param {Object} movie Movie unmapped.
 * @returns {Object} The movie mapped.
 */
export default (movie) => {
  const { _id, genre: movieGenre, ...rest } = movie
  return {
    id: _id.$oid,
    genre: movieGenre ? movieGenre.split("|") : [],
    ...rest,
  }
}
