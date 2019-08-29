import { Navigation } from "react-native-navigation"

import withProviders from "./containers/withProviders"
import screens, { LIST } from "./screens"

class App {
  constructor() {
    this.registerScreens(screens)
    Navigation.startSingleScreenApp({
      screen: {
        screen: LIST,
        navigatorStyle: { navBarHidden: true },
      },
    })
  }
  registerScreens = screensToRegister =>
    Object.entries(screensToRegister).forEach(([key, Screen]) =>
      Navigation.registerComponent(key, () => withProviders(Screen)),
    )
}

export default new App()
