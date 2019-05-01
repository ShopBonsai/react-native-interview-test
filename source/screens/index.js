import MovieList from "./MovieListScreen";
import MovieDetails from "./MovieDetailsScreen";
import ShoppingCart from "./ShoppingCartScreen";

export const MOVIELIST = "interview.movielist";
export const MOVIEDETAILS = "interview.moviedetails";
export const SHOPPINGCART = "interview.shoppingcart";

export default {
  [MOVIELIST]: MovieList,
  [MOVIEDETAILS]: MovieDetails,
  [SHOPPINGCART]: ShoppingCart,
};
