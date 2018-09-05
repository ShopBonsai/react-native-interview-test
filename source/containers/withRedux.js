import { Provider } from "react-redux"
import { nest, compose, withProps } from "recompose"

export default store => Child => nest(compose(withProps({ store }))(Provider), Child)
