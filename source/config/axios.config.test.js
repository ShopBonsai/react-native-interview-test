import axiosClient from "./axios.config"

describe("axios client", () => {
  it("should be a valid axios instance", () => {
    expect(axiosClient).toBeDefined()
  })
})
