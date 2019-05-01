import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import ShoppingCart from "./ShoppingCart";

export const MOVIELIST = "interview.movielist";
export const MOVIEDETAILS = "interview.moviedetails";
export const SHOPPINGCART = "interview.shoppingcart";

export default {
  [MOVIELIST]: MovieList,
  [MOVIEDETAILS]: MovieDetails,
  [SHOPPINGCART]: ShoppingCart,
};
