import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import TabBar from '../organisms/TabBar';

import paths, { Path } from './paths';

// TODO: Upgrade to stronger typing after issue with
// recent versions of react-navigation has been solved:
// https://github.com/react-navigation/react-navigation/issues/6295

// Routes
const routes: any = paths.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.name]: cur.screen,
  }),
  {},
);

// Tab Navigator Config
const initialPath: Path = paths.find(path => path.initial) || paths[0];
const config: any = {
  initialRouteName: initialPath.name,
  tabBarComponent: TabBar,
  tabBarPosition: 'bottom',
};

// Navigator
const AppNavigator: any = createMaterialTopTabNavigator(routes, config);

export default createAppContainer(AppNavigator);
