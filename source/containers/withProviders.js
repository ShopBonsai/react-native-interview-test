import { compose } from "recompose"

import reduxStore from "../store"

import withRedux from "./withRedux"
import withSafeArea from "./withSafeArea"

export default compose(withRedux(reduxStore), withSafeArea)
