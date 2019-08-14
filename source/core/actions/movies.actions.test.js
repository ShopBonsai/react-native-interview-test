import MovieTicketsActions from "./movies.actions"

describe("MoviesActions", () => {
  let moviesActionsIns

  beforeEach(() => {
    moviesActionsIns = new MovieTicketsActions()
  })

  it("should create a MoviesActions instance without problems", () => {
    expect(moviesActionsIns).toBeDefined()
  })

  it("should execute a Promise and dispatch action", () => {
    jest.spyOn(MovieTicketsActions, "getMovieTickets")
    const dispatcher = MovieTicketsActions.getMovieTickets(null, null, true)
    expect(MovieTicketsActions.getMovieTickets).toBeCalled()
    expect(dispatcher).toBeDefined()
  })
})
