/* eslint-disable import/no-named-as-default-member */
import { AppRegistry } from 'react-native'
import { name as appName } from '../app.json'

import withProviders from './containers/withProviders'
import AppNavigator from './config/appNavigation'

AppRegistry.registerComponent(appName, () => withProviders(AppNavigator))
