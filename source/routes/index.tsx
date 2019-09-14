import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import MainScreen from '../screens/Main';

// TODO: Upgrade to stronger typing after issue with
// recent versions of react-navigation has been solved:
// https://github.com/react-navigation/react-navigation/issues/6295

// Routes
const routes: any = {
  Main: MainScreen,
};

// Tab Navigator Config
const config: any = {
  initialRouteName: 'Main',
  tabBarPosition: 'bottom',
};

// Navigator
const AppNavigator: any = createMaterialTopTabNavigator(routes, config);

export default createAppContainer(AppNavigator);
