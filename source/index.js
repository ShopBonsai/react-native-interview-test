/* eslint-disable import/no-named-as-default-member */
import { Navigation } from 'react-native-navigation'
import { AppRegistry } from 'react-native'

import { name as appName } from '../app.json'

import withProviders from './containers/withProviders'
import screens, { MAIN } from './screens'

const registerScreens = screensToRegister => {
  Object.entries(screensToRegister).forEach(([key, Screen]) => (
    Navigation.registerComponent(key, () => withProviders(Screen))
  ))
}
registerScreens(screens)
AppRegistry.registerComponent(appName, () => withProviders(screens[MAIN]))
