import { AppRegistry, YellowBox } from 'react-native';

import App from './source/App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  'componentWillMount is deprecated', // Some libraries still use deprecated lifecycle hooks
  'componentWillReceiveProps is deprecated', // Some libraries still use deprecated lifecycle hooks
]);

AppRegistry.registerComponent(appName, () => App);
