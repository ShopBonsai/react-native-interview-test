import withProviders from "./withProviders"

describe("withProviders", () => {
  it("should render without any problem", () => {
    const WithProviders = withProviders()
    expect(WithProviders).toBeDefined()
  })
})
