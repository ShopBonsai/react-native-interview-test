/* eslint-disable import/no-named-as-default-member */
import { AppRegistry } from 'react-native'

import { name as appName } from '../app.json'

import withProviders from './containers/withProviders'
import screens, { MAIN } from './screens'

AppRegistry.registerComponent(appName, () => withProviders(screens[MAIN]))
