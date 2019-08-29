import movieNormalizer from "../../normalizers/movieNormalizer"
import movieList from "../__mock__/movieList"
import movieListParsed from "../__mock__/movieListParsed"

describe("movieNormalizer", () => {
  it("movie Normalizer should work with blank params", () => {
    const normalized = movieNormalizer()
    expect(normalized).toEqual([])
  })
  it("should normalize data", () => {
    const normalized = movieNormalizer(movieList)
    expect(normalized).toEqual(movieListParsed)
  })
})
