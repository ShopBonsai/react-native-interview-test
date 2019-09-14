import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import FeedScreen from '../screens/Feed';
import FavoritesScreen from '../screens/Favorites';
import TicketsScreen from '../screens/Tickets';

// TODO: Upgrade to stronger typing after issue with
// recent versions of react-navigation has been solved:
// https://github.com/react-navigation/react-navigation/issues/6295

// Routes
const routes: any = {
  Feed: FeedScreen,
  Favorites: FavoritesScreen,
  Tickets: TicketsScreen,
};

// Tab Navigator Config
const config: any = {
  initialRouteName: 'Feed',
  tabBarPosition: 'bottom',
};

// Navigator
const AppNavigator: any = createMaterialTopTabNavigator(routes, config);

export default createAppContainer(AppNavigator);
