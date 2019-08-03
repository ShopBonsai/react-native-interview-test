/**
 * Data mapping for the movies.
 *
 * @param {Array} data Data to be mapped.
 * @returns {Object} Data mapped.
 */
export default (data) => {
  const mappedData = []
  data.forEach((movie) => {
    const { _id, genre: movieGenre, title, ...rest } = movie
    if (title) {
      mappedData.push({
        id: _id.$oid,
        genres: movieGenre ? movieGenre.split("|") : [],
        title,
        ...rest,
      })
    }
  })
  return mappedData
}
