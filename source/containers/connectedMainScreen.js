import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import MovieTicketsActions from "../core/actions/movies.actions"
import Main from "../screens/Main"

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getMovieTickets: MovieTicketsActions.getMovieTickets }, dispatch),
})

const mapStateToProps = (state) => ({
  store: {
    ...state.movieTicketsStore,
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
