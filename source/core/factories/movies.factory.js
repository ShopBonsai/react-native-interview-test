/**
 * Data mapping for the movies.
 *
 * @param {Array} data Data to be mapped.
 * @returns {Object} Data mapped.
 */
export default (data) => {
  const mappedData = []
  data.forEach((movie) => {
    const { _id, genre: movieGenre, image, title, ...rest } = movie
    if (title) {
      mappedData.push({
        id: _id.$oid,
        genres: movieGenre ? movieGenre.split("|") : [],
        image: image && image.replace("http://", "https://"),
        title,
        ...rest,
      })
    }
  })
  return mappedData
}
