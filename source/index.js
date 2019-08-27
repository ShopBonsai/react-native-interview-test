import { Navigation } from "react-native-navigation"
import { AppRegistry } from 'react-native';
import withProviders from "./containers/withProviders"
import screens, { MAIN } from "./screens"
import { name as appName } from '../app.json';


const registerScreens = screensToRegister =>{
  Object.entries(screensToRegister).forEach(([key, Screen]) =>
    Navigation.registerComponent(key, () => withProviders(Screen)),
  )
}
registerScreens(screens)
AppRegistry.registerComponent(appName, () => withProviders(screens[MAIN]))

