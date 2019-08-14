import { Navigation } from "react-native-navigation"

import screens, { MAIN } from "./screens"
import withRedux from "./containers/withRedux"

class App {
  constructor() {
    this.registerScreens(screens)
    Navigation.startSingleScreenApp({
      screen: {
        screen: MAIN,
        navigatorStyle: { navBarHidden: true },
      },
    })
  }

  registerScreens = (screensToRegister) =>
    Object.entries(screensToRegister).forEach(([key, Screen]) =>
      Navigation.registerComponent(key, () => withRedux(Screen)),
    )
}

export default new App()
