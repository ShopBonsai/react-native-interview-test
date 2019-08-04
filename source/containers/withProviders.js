import { compose } from "recompose"

import reduxStore from "../store"

import withRedux from "./withRedux"
import withHeader from "./withHeader"

export default compose(withRedux(reduxStore), withHeader)
