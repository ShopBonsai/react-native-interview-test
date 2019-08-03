import React from "react"

import AppHeader from "../molecules/app-header/AppHeader"

export default (Child) =>
  class WithHeader extends React.Component {
    render() {
      return (
        <React.Fragment>
          <AppHeader />
          <Child {...this.props} />
        </React.Fragment>
      )
    }
  }
