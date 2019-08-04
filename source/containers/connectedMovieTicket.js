import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import MovieTicket from "../organisms/movie-ticket/MovieTicket"
import FavoriteMoviesActions from "../core/actions/favorites.actions"

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(
    {
      setFavoritedMovie: () => FavoriteMoviesActions.setFavoritedMovie(ownProps.item.id),
      unsetFavoritedMovie: () => FavoriteMoviesActions.unsetFavoritedMovie(ownProps.item.id),
    },
    dispatch,
  ),
})

const mapStateToProps = (state, ownProps) => ({
  isFavorited: state.favoritedMoviesStore.favoritedMovies.find(
    (favorited) => favorited === ownProps.item.id,
  )
    ? true
    : false,
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieTicket)
