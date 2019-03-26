/** SUBHAN CHAUDHRY - FINAL INTERVIEW SUBMISSION - March 26, 2019 */

import { Navigation } from "react-native-navigation"

import withProviders from "./containers/withProviders"
import screens, { MAIN, MOVIELIST } from "./screens"
import { bonsai_colour } from './styles';

class App {
  constructor() {
    this.registerScreens(screens)
    Navigation.startSingleScreenApp({
      screen: {
        screen: MOVIELIST, // Use movie list as initial screen
        title: "Bonsai Movies",
        navigatorStyle: {
          navBarHidden: false, // show navbar
          navBarBackgroundColor: bonsai_colour.blue, // Use bonsai colour
          navBarTextColor: '#FFFFFF',
          navBarTranslucent: true, // enable translucency
          largeTitle: true // enable Large Title in iOS NavigationBar
        }
      }
    });
  }
  registerScreens = screensToRegister => {
    Object.entries(screensToRegister).forEach(([key, Screen]) =>
      Navigation.registerComponent(key, () => withProviders(Screen)),
    )
  }
}

export default new App()
