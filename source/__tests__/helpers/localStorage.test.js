import * as storage from "../../helpers/localStorage"
import movieListParsed from "../__mock__/movieListParsed"

describe("LocalStroage", () => {
  it("should Set Get item in asyncStorage", async () => {
    await storage.setItem("abc", movieListParsed[0])
    expect(await storage.getItem("abc")).toEqual(movieListParsed[0])
  })
})
