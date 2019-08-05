import moviesFactory from "./movies.factory"

describe("Movies factory", () => {
  it("should return a mapped data if genre is defined", () => {
    const mappedData = moviesFactory([
      {
        _id: {
          $oid: "dummy",
        },
        genre: "dummy|dummy2",
        image: "http://dummy.com",
        title: "dummy-title",
        dummy: "dummyprop",
      },
    ])
    expect(mappedData[0]).toEqual({
      id: "dummy",
      genres: ["dummy", "dummy2"],
      image: "https://dummy.com",
      title: "dummy-title",
      dummy: "dummyprop",
    })
  })

  it("should return a mapped data if genre is undefined", () => {
    const mappedData = moviesFactory([
      {
        _id: {
          $oid: "dummy",
        },
        genre: null,
        image: "http://dummy.com",
        title: "dummy-title",
        dummy: "dummyprop",
      },
    ])
    expect(mappedData[0]).toEqual({
      id: "dummy",
      genres: [],
      image: "https://dummy.com",
      title: "dummy-title",
      dummy: "dummyprop",
    })
  })
})
