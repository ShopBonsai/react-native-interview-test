import Main from "./Main"
import MovieList from "../components/MovieList";
import MovieDetails from "../components/MovieDetails";

export const MAIN = "interview.main"
export const MOVIELIST = "interview.movieList"
export const MOVIEDETAILS = "interview.movieDetails"

export default {
  [MAIN]: Main,
  [MOVIELIST]: MovieList,
  [MOVIEDETAILS]: MovieDetails
}
