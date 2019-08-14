import React from "react"
import PropTypes from "prop-types"
import { View, Text } from "react-native"
import { Provider } from "react-redux"
import { withStateHandlers, compose } from "recompose"

import reduxStore from "../store"
import initialStore from "../config/initialStore.config"

import withHeader from "./withHeader"

class WithRedux extends React.PureComponent {
  componentDidMount() {
    const { setIsLoadingAndIniRedux } = this.props
    initialStore().then((initialReduxStore) => {
      setIsLoadingAndIniRedux(false, initialReduxStore)
    })
  }

  render() {
    const { children, initialReduxState, isLoading } = this.props
    if (isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    return <Provider store={reduxStore(initialReduxState)}>{children}</Provider>
  }
}

WithRedux.propTypes = {
  initialReduxState: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setIsLoadingAndIniRedux: PropTypes.func.isRequired,
}

function withRedux(Child) {
  return withStateHandlers(
    ({ initialReduxState = {}, isLoading = true }) => ({
      isLoading,
      initialReduxState,
    }),
    {
      setIsLoadingAndIniRedux: () => (newStateLoading, newInitialReduxState) => ({
        isLoading: newStateLoading,
        initialReduxState: newInitialReduxState,
      }),
    },
  )((props) => (
    <WithRedux {...props}>
      <Child />
    </WithRedux>
  ))
}

export default compose(withHeader, withRedux)
