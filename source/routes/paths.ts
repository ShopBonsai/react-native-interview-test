import { NavigationScreenComponent } from 'react-navigation';

import FeedScreen from '../screens/Feed';
import FavoritesScreen from '../screens/Favorites';
import TicketsScreen from '../screens/Tickets';

export interface Path {
  key: string;
  name: string;
  screen: NavigationScreenComponent;
  iconName: string;
  initial?: boolean;
}

const paths: Path[] = [
  {
    key: 'feed',
    name: 'Feed',
    screen: FeedScreen,
    iconName: 'list',
    initial: true,
  },
  {
    key: 'favorites',
    name: 'Favorites',
    screen: FavoritesScreen,
    iconName: 'heart',
  },
  {
    key: 'tickets',
    name: 'Tickets',
    screen: TicketsScreen,
    iconName: 'ticket',
  },
];

export default paths;
